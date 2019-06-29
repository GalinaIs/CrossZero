import React, { Component } from 'react';
import { number } from 'prop-types';
import ImageCell from 'components/ImageCell';
import TitleField from 'components/TitleField';

class Field extends Component {
    static propTypes = {
        size: number.isRequired,
        countCellsForWin: number.isRequired
    };

    constructor(props) {
        super(props);

        const { size } = this.props;
        const stateCells = new Array(size * size);
        for (let i = 0; i < size; i++)
            stateCells[i] = new Array(size);

        for (let i = 0; i < size; i++)
            for (let j = 0; j < size; j++)
                stateCells[i][j] = "";

        this.state = {
            stateCells,
            isCross: true,
            countFreeCells: size * size,
            isFinish: false,
            winner: ""
        };

        this.update = this.update.bind(this);
    }

    checkRightDiagonal(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.props;
        const { stateCells } = this.state;

        for (let i = 0; i < countCellsForWin; i++) {
            if (stateCells[startIndX + i][startIndY + i] !== symbol)
                return false;
        }

        return true;
    }

    checkLeftDiagonal(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.props;
        const { stateCells } = this.state;

        for (let i = 0; i < countCellsForWin; i++) {
            if (stateCells[startIndX + countCellsForWin - i - 1][startIndY + i] !== symbol)
                return false;
        }

        return true;
    }

    checkDiagonals(startIndX, startIndY, symbol) {
        return this.checkRightDiagonal(startIndX, startIndY, symbol) ||
            this.checkLeftDiagonal(startIndX, startIndY, symbol);
    }

    checkOneHorizontalLine(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.props;
        const { stateCells } = this.state;

        for (let i = 0; i < countCellsForWin; i++) {
            if (stateCells[startIndX][startIndY + i] !== symbol)
                return false;
        }

        return true;
    }

    checkHorizontalLines(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.props;

        for (let i = 0; i < countCellsForWin; i++) {
            if (this.checkOneHorizontalLine(startIndX + i, startIndY, symbol))
                return true;
        }

        return false;
    }

    checkOneVerticalLine(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.props;
        const { stateCells } = this.state;

        for (let i = 0; i < countCellsForWin; i++) {
            if (stateCells[startIndX + i][startIndY] !== symbol)
                return false;
        }

        return true;
    }

    checkVerticalLines(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.props;

        for (let i = 0; i < countCellsForWin; i++) {
            if (this.checkOneVerticalLine(startIndX, startIndY + i, symbol))
                return true;
        }

        return false;
    }

    checkLines(startIndX, startIndY, symbol) {
        return this.checkHorizontalLines(startIndX, startIndY, symbol) ||
            this.checkVerticalLines(startIndX, startIndY, symbol);
    }

    checkSquare(startIndX, startIndY, symbol) {
        return this.checkDiagonals(startIndX, startIndY, symbol) || this.checkLines(startIndX, startIndY, symbol);
    }

    winSomething(symbol) {
        this.setState((prevState) => {
            return {
                ...prevState,
                isFinish: true,
                winner: symbol
            }
        });
    }

    winNodoby() {
        this.setState((prevState) => {
            return {
                ...prevState,
                isCross: !prevState.isCross,
                countFreeCells: prevState.countFreeCells - 1,
                isFinish: prevState.countFreeCells - 1 === 0,
            }
        });
    }

    isWinGame() {
        const { size, countCellsForWin } = this.props;
        const countSquare = size - countCellsForWin;

        for (let i = 0; i <= countSquare; i++) {
            for (let j = 0; j <= countSquare; j++) {
                if (this.checkSquare(i, j, "X")) {
                    this.winSomething("X");
                    return;
                }

                if (this.checkSquare(i, j, "O")) {
                    this.winSomething("O");
                    return;
                }
            }
        }

        this.winNodoby();
    }

    update(element) {
        const x = element.dataset.x;
        const y = element.dataset.y;

        if (this.state.isFinish || this.state.stateCells[x][y] !== "")
            return;

        this.state.stateCells[x][y] = this.state.isCross ? "X" : "O";

        this.isWinGame();
    }

    render() {
        return (
            <div>
                <TitleField isFinish={this.state.isFinish} winner={this.state.winner} isCross={this.state.isCross} />

                <table>
                    <tbody>
                        {this.state.stateCells.map((value, ind) => (
                            <tr key={ind}>
                                {value.map((valueInternal, indInternal) => {
                                    if (valueInternal === "O")
                                        return (
                                            <td key={indInternal} className="cell cell-white" data-x={ind} data-y={indInternal} onClick={event => this.update(event.target)}>
                                                <ImageCell src="/dist/img/zero.jpg" />
                                            </td>
                                        );

                                    if (valueInternal === "X")
                                        return (
                                            <td key={indInternal} className="cell cell-white" data-x={ind} data-y={indInternal} onClick={event => this.update(event.target)}>
                                                <ImageCell src="/dist/img/cross.png" />
                                            </td>
                                        );

                                    return (
                                        <td key={indInternal} className="cell" data-x={ind} data-y={indInternal} onClick={event => this.update(event.target)} />
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Field;
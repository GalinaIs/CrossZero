export default class CrossZero {
    constructor(state, action) {
        this.state = state;
        this.size = size;
        this.countCellsForWin = countCellsForWin;
    }

    stateGame() {
        //const { size, countCellsForWin } = this.action;
        const countSquare = this.size - this.countCellsForWin;

        for (let i = 0; i <= countSquare; i++) {
            for (let j = 0; j <= countSquare; j++) {
                if (this.checkSquare(i, j, "X")) {
                    this.winSymbol("X");
                    return this.state;
                }

                if (this.checkSquare(i, j, "O")) {
                    this.winSymbol("O");
                    return this.state;
                }
            }
        }

        this.winNodoby();
        return this.state;
    }

    checkSquare(startIndX, startIndY, symbol) {
        return this.checkDiagonals(startIndX, startIndY, symbol) ||
            this.checkLines(startIndX, startIndY, symbol);
    }

    checkDiagonals(startIndX, startIndY, symbol) {
        return this.checkRightDiagonal(startIndX, startIndY, symbol) ||
            this.checkLeftDiagonal(startIndX, startIndY, symbol);
    }

    checkRightDiagonal(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.action;
        const { cells } = this.state;

        for (let i = 0; i < countCellsForWin; i++) {
            if (cells[startIndX + i][startIndY + i] !== symbol)
                return false;
        }

        return true;
    }

    checkLeftDiagonal(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.action;
        const { cells } = this.state;

        for (let i = 0; i < countCellsForWin; i++) {
            if (cells[startIndX + countCellsForWin - i - 1][startIndY + i] !== symbol)
                return false;
        }

        return true;
    }

    checkLines(startIndX, startIndY, symbol) {
        return this.checkHorizontalLines(startIndX, startIndY, symbol) ||
            this.checkVerticalLines(startIndX, startIndY, symbol);
    }

    checkOneHorizontalLine(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.action;
        const { cells } = this.state;

        for (let i = 0; i < countCellsForWin; i++) {
            if (cells[startIndX][startIndY + i] !== symbol)
                return false;
        }

        return true;
    }

    checkHorizontalLines(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.action;

        for (let i = 0; i < countCellsForWin; i++) {
            if (this.checkOneHorizontalLine(startIndX + i, startIndY, symbol))
                return true;
        }

        return false;
    }

    checkOneVerticalLine(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.action;
        const { cells } = this.state;

        for (let i = 0; i < countCellsForWin; i++) {
            if (cells[startIndX + i][startIndY] !== symbol)
                return false;
        }

        return true;
    }

    checkVerticalLines(startIndX, startIndY, symbol) {
        const { countCellsForWin } = this.action;

        for (let i = 0; i < countCellsForWin; i++) {
            if (this.checkOneVerticalLine(startIndX, startIndY + i, symbol))
                return true;
        }

        return false;
    }

    winSymbol(symbol) {
        this.state.isFinish = true;
        this.state.winner = symbol;
        //console.log("win " + symbol);
    }

    winNodoby() {
        this.state.isCross = !this.state.isCross;
        this.state.countFreeCells = this.state.countFreeCells - 1;
        this.state.isFinish = this.state.countFreeCells === 0;
    }
}
import React, { Component } from 'react';
import ImageCell from 'components/ImageCell';
import TitleField from 'components/TitleField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCells } from 'actions/cells';
import { loadCells } from 'actions/loadCells';

const Field = (props) => {
        const { cells, setCells } = props;
        return (
            <div>
                <TitleField {...props} />

                <table>
                    <tbody>
                        {cells.map((value, ind) => (
                            <tr key={ind}>
                                {value.map((valueInternal, indInternal) => {
                                    if (valueInternal === "O")
                                        return (
                                            <td key={indInternal} className="cell cell-white" data-x={ind} data-y={indInternal} onClick={event => 
                                                setCells(event.target)}>
                                                <ImageCell src="/dist/img/zero.jpg" />
                                            </td>
                                        );

                                    if (valueInternal === "X")
                                        return (
                                            <td key={indInternal} className="cell cell-white" data-x={ind} data-y={indInternal} onClick={event =>
                                                setCells(event.target)}>
                                                <ImageCell src="/dist/img/cross.png" />
                                            </td>
                                        );

                                    return (
                                        <td key={indInternal} className="cell" data-x={ind} data-y={indInternal} onClick={event =>
                                            setCells(event.target)}
                                        />
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

Field.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    isCross: PropTypes.bool.isRequired,
    countFreeCells: PropTypes.number.isRequired,
    isFinish: PropTypes.bool.isRequired,
    winner: PropTypes.string.isRequired,
    setCells: PropTypes.func.isRequired,
    loadCells: PropTypes.func.isRequired,
};

export default connect(
    store => ({
        cells: store.cellsReducer.cells,
        isCross: store.cellsReducer.isCross,
        countFreeCells: store.cellsReducer.countFreeCells,
        isFinish: store.cellsReducer.isFinish,
        winner: store.cellsReducer.winner,
    }),
    dispatch => ({
        setCells: (element, size, countCellsForWin) => dispatch(setCells(element, size, countCellsForWin)),
        loadCells: size => dispatch(loadCells(size)),
    })
)(Field);
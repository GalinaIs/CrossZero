import React from 'react';
import ImageCell from 'components/ImageCell';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCells } from 'actions/cells';
import classNames from 'classnames';

const Cell = ({ indX, indY, valueCell, setCells }) => {
    const cellClass = classNames('cell', {
        'cell-white': valueCell == "X" || valueCell == "O"
    });

    let imageCell = "";
    switch (valueCell) {
        case "O":
            imageCell = <ImageCell src="/dist/img/zero.jpg" />;
            break;
        case "X":
            imageCell = <ImageCell src="/dist/img/cross.png" />;
            break;
    }

    return (
        <td className={cellClass} data-x={indY} data-y={indX} onClick={setCells}>
            {imageCell}
        </td>
    );
}

Cell.propTypes = {
    indX: PropTypes.number.isRequired, 
    indY: PropTypes.number.isRequired,
    valueCell: PropTypes.string,
    setCells: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default connect(
    (store, props) => ({
        valueCell: store.cellsReducer[props.name]
    }),
    (dispatch, props) => ({
        setCells: event => dispatch(setCells(event.target, props.name)),
    })
)(Cell);
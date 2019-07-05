import React from 'react';
import TitleField from 'components/TitleField';
import Cell from 'components/Cell';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Field = ({cells}) => {
        return (
            <div>
                <TitleField />

                <table>
                    <tbody>
                        {cells.map((value, ind) => (
                            (<tr key={ind}>
                                {value.map((valueInternal, indInternal) => {
                                    return <Cell key={indInternal} indX={indInternal} indY={ind} 
                                    name={indInternal + " " + ind} />
                                })}
                            </tr>)
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

Field.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default connect(
    store => ({
        cells: store.cellsReducer.cells,
    })
)(Field);
import React from 'react';
import { number, bool } from 'prop-types';
import { Row, Col } from 'reactstrap';
import Field from 'components/Field';

const minSize = 2;
const maxSize = 12;

const Main = ({ size, countCellsForWin, isNew }) => {
    if (size < minSize)
        size = minSize;
    if (size > maxSize)
        size = maxSize;

    if (countCellsForWin < minSize)
        countCellsForWin = minSize;
    if (countCellsForWin > size)
        countCellsForWin = size;

    const leftPadding = Math.ceil((maxSize - size) / minSize);
    const rightPadding = leftPadding + (maxSize - size) % minSize;

    return (
        <Row>
            <Col lg={leftPadding} />
            <Col lg={size}>
                <Field size={size} countCellsForWin={countCellsForWin} isNew={isNew} />
            </Col>
            <Col lg={rightPadding} />
        </Row>
    );
};

Main.propTypes = {
    size: number.isRequired,
    countCellsForWin: number.isRequired,
    isNew: bool,
};

export default Main;
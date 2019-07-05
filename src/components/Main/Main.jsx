import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Field from 'components/Field';
import { connect } from 'react-redux';

const Main = ({ size, minSize, maxSize }) => {
    const leftPadding = Math.ceil((maxSize - size) / minSize);
    const rightPadding = leftPadding + (maxSize - size) % minSize;

    return (
        <Row>
            <Col lg={leftPadding} />
            <Col lg={size}>
                <Field />
            </Col>
            <Col lg={rightPadding} />
        </Row>
    );
};

Main.propTypes = {
    size: PropTypes.number.isRequired,
    maxSize: PropTypes.number.isRequired,
    minSize: PropTypes.number.isRequired
};

export default connect(
    store => ({
        size: store.cellsReducer.size,
        minSize: store.cellsReducer.minSize,
        maxSize: store.cellsReducer.maxSize,
    })
)(Main);
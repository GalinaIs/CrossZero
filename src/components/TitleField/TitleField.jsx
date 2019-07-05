import React from 'react';
import { bool, string } from 'prop-types';
import { connect } from 'react-redux';

const messageMakeMove = "Делает ход игрок :";
const messageMoveCross = "'крестик'";
const messageMoveZero = "'нолик'";
const messageFinishGame = "Игра завершена";
const messageWinCross = "Победил 'крестик'";
const messageWinZero = "Победил 'нолик'";
const messageWinNobody = "Ничья";

const messageTitle = {
    [true]: {
        ["X"]: {
            firstPart: messageFinishGame,
            secondPart: messageWinCross
        },
        ["O"]: {
            firstPart: messageFinishGame,
            secondPart: messageWinZero
        },
        [""]: {
            firstPart: messageFinishGame,
            secondPart: messageWinNobody
        }
    },
    [false]: {
        [true]: {
            firstPart: messageMakeMove,
            secondPart: messageMoveCross
        },
        [false]: {
            firstPart: messageMakeMove,
            secondPart: messageMoveZero
        },
    }
}

const TitleField = ({ isFinish, winner, isCross }) => {
    if (isFinish) {
        return (
            <h3 className="mt-3">
                {messageTitle[isFinish][winner].firstPart}
                <br />
                {messageTitle[isFinish][winner].secondPart}
            </h3>
        );
    }

    return (
        <h3 className="mt-3">
            {messageTitle[isFinish][isCross].firstPart}
            <br />
            {messageTitle[isFinish][isCross].secondPart}
        </h3>
    );
};

TitleField.propTypes = {
    isFinish: bool.isRequired,
    winner: string.isRequired,
    isCross: bool.isRequired,
};

export default connect(
    store => ({
        isCross: store.cellsReducer.isCross,
        isFinish: store.cellsReducer.isFinish,
        winner: store.cellsReducer.winner,
    })
)(TitleField);
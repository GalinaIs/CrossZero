import React from 'react';
import { bool, string } from 'prop-types';

const messageAction = "Делает ход игрок :";
const messageCross = "'крестик'";
const messageZero = "'нолик'";
const messageFinishGame = "Игра завершена";
const messageWinCross = "Победил 'крестик'";
const messageWinZero = "Победил 'нолик'";
const messageWinNobody = "Ничья";

const TitleField = ({ isFinish, winner, isCross }) => {
    if (isFinish) {
        if (winner === "X")
            return (
                <h3 className="mt-3">
                    {messageFinishGame}
                    <br />
                    {messageWinCross}
                </h3>
            );

        if (winner === "O")
            return (
                <h3 className="mt-3">
                    {messageFinishGame}
                    <br />
                    {messageWinZero}
                </h3>
            );

        return (
            <h3 className="mt-3">
                {messageFinishGame}
                <br />
                {messageWinNobody}
            </h3>
        );
    }

    if (isCross)
        return (
            <h3 className="mt-3">
                {messageAction}
                <br />
                {messageCross}
            </h3>
        );

    return (
        <h3 className="mt-3">
            {messageAction}
            <br />
            {messageZero}
        </h3>
    );
};

TitleField.propTypes = {
    isFinish: bool.isRequired,
    winner: string.isRequired,
    isCross: bool.isRequired,
};

export default TitleField;
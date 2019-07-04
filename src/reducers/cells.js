import { SET_CELLS } from 'actions/cells';
import { LOAD_CELLS } from 'actions/loadCells';
import CrossZero from './CrossZero';

const initiateStateCells = (size) => {
    const stateCells = new Array(size);
    for (let i = 0; i < size; i++)
        stateCells[i] = new Array(size);

    for (let i = 0; i < size; i++)
        for (let j = 0; j < size; j++)
            stateCells[i][j] = "";

    return stateCells;
}

const setCells = (state, action) => {
    if (state.isFinish || state.cells[action.x][action.y] !== "")
        return state;

    state.cells[action.x][action.y] = state.isCross ? "X" : "O";

    const newState = new CrossZero(state, action).stateGame();
    console.log(newState);

    return Object.assign({}, state, {
        ...newState
    });
}

export default (state = {
    cells: [],
    countFreeCells: 0,
    isCross: true,
    isFinish: false,
    winner: ""
}, action) => {

    switch (action.type) {
        case LOAD_CELLS:
            return Object.assign({}, state, {
                cells: initiateStateCells(action.size),
                countFreeCells: action.size * action.size,
                isCross: true,
                isFinish: false,
                winner: ""
            });
        case SET_CELLS:
            return setCells(state, action);
        default:
            return state;
    }
};
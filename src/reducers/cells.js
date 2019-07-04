import { SET_CELLS } from 'actions/cells';
import { LOAD_CELLS } from 'actions/loadCells';
import CrossZero from './CrossZero';

const size = 5;
const countCellsForWin = 3;

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

    const cells = [...state.cells];
    const row = [...state.cells[action.x]];
    row[action.y] = state.isCross ? "X" : "O";
    cells[action.x] = row;
    const tmpState = {...state, cells};

    const newState = new CrossZero(tmpState, size, countCellsForWin).stateGame();
    //console.log(newState);

    return Object.assign({}, state, {
        ...newState
    });
}

const initialState = {
    cells: initiateStateCells(size),
    countFreeCells: size * size,
    isCross: true,
    isFinish: false,
    winner: ""
};

export default (state = initialState, action) => {

    switch (action.type) {
        case LOAD_CELLS:
            return Object.assign({}, initialState);
        case SET_CELLS:
            return setCells(state, action);
        default:
            return state;
    }
};
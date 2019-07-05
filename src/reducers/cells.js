import { SET_CELLS } from 'actions/cells';
import { LOAD_CELLS } from 'actions/loadCells';
import CrossZero from './CrossZero';

let size = 3;
let countCellsForWin = 3;
const minSize = 2;
const maxSize = 12;

if (size < minSize)
    size = minSize;
if (size > maxSize)
    size = maxSize;

if (countCellsForWin < minSize)
    countCellsForWin = minSize;
if (countCellsForWin > size)
    countCellsForWin = size;

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
    const cells = [...state.cells];
    const row = [...state.cells[action.x]];
    row[action.y] = state.isCross ? "X" : "O";
    cells[action.x] = row;
    return {...state, cells };
}

const setState = (state, action) => {
    if (state.isFinish || state.cells[action.x][action.y] !== "")
        return state;

    const symbol = state.isCross ? "X" : "O";
    state = setCells(state, action, symbol);

    const newState = new CrossZero(state, size, countCellsForWin).stateGame();

    return Object.assign({}, state, {
        ...newState,
        [action.node]: symbol,
    });
}

const initialState = {
    cells: initiateStateCells(size),
    countFreeCells: size * size,
    isCross: true,
    isFinish: false,
    winner: "",
    size,
    minSize,
    maxSize
};

const reducer = {
    [LOAD_CELLS]: () => initialState,
    [SET_CELLS]: (state, action) => setState(state, action),
};

export default (state = initialState, action) => {
    if (!action.type || !reducer[action.type]) {
        return state;
    }

    return reducer[action.type](state, action);
};
export const SET_CELLS = 'SET_CELLS';

export const setCells = (element, size, countCellsForWin) => {
    if (!element.dataset.x)
        element = element.parentElement.parentElement;

    const x = element.dataset.x;
    const y = element.dataset.y;

    return {
        type: SET_CELLS,
        x,
        y,
        size,
        countCellsForWin,
    }
};
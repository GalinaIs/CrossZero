import { combineReducers } from 'redux';
import newGameReducer from './newGame';
import cellsReducer from './cells';

export default combineReducers({
    newGameReducer,
    cellsReducer,
});
import { SET_NEW_GAME } from 'actions/newGame';

export default (state = { newGame: 0 }, action) => {
  if (action.type !== SET_NEW_GAME){
    return state;
  }

  return Object.assign({}, state, { newGame: ++state.newGame });
};
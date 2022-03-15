import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { commentReducer } from './comment';
import { interactionReducer } from './interaction';

const rootReducer = combineReducers({
  comment: commentReducer,
  interaction: interactionReducer,
});

export default rootReducer;

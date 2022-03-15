// import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { commentReducer } from './comment';
// import { interactionReducer } from './interaction';
import { postReducer } from './post';

const rootReducer = combineReducers({
  comment: commentReducer,
  // interaction: interactionReducer,
  post: postReducer,
});

export default rootReducer;

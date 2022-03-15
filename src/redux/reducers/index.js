import { combineReducers } from 'redux';
import { commentReducer } from './comment';
import { interactionReducer } from './interaction';
import { postReducer } from './post';
import { dataReducer } from './dataReducer';

const rootReducer = combineReducers({
  comment: commentReducer,
  interaction: interactionReducer,
  post: postReducer,
  data: dataReducer,
});

export default rootReducer;

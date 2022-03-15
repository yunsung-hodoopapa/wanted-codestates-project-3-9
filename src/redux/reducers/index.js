import { combineReducers } from 'redux';
import { commentReducer } from './comment';
import { interactionReducer } from './interaction';
import { postReducer } from './post';
import { dataReducer } from './dataReducer';
import { sortReducer } from './sortReducer';

const rootReducer = combineReducers({
  comment: commentReducer,
  interaction: interactionReducer,
  post: postReducer,
  data: dataReducer,
  sort: sortReducer,
});

export default rootReducer;

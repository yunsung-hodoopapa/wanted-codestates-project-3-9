import { combineReducers } from 'redux';
import { commentReducer } from './comment';
import { postReducer } from './post';
import { dataReducer } from './dataReducer';
import { sortReducer } from './sortReducer';

const rootReducer = combineReducers({
  comment: commentReducer,
  post: postReducer,
  data: dataReducer,
  sort: sortReducer,
});

export default rootReducer;

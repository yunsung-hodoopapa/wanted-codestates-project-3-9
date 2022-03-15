import { combineReducers } from 'redux';
import { interactionReducer } from './interaction';
import { postReducer } from './post';
import { dataReducer } from './dataReducer';

const rootReducer = combineReducers({
  interaction: interactionReducer,
  post: postReducer,
  data: dataReducer,
});

export default rootReducer;

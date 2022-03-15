import { createStore } from 'redux';
import { commentReducer } from './reducers/comment';
import { interactionReducer } from './reducers/interaction';

const rootReducer = createStore({
  comment: commentReducer,
  interaction: interactionReducer,
});

export default rootReducer;

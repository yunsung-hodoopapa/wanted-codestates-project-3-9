import { createStore } from 'redux';
import { commentReducer } from './reducers/comment';

const store = createStore(commentReducer);

export default store;

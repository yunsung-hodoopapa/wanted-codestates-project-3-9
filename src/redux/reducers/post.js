import { data } from '../../model/data';
import { ADD_POST } from '../actions';

export const postReducer = (state = data, action) => {
  switch (action.type) {
    case ADD_POST: {
      return [...state, action.post];
    }

    default:
      return state;
  }
};

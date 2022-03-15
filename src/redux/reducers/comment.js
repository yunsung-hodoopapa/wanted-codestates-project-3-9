import { data } from '../../model/data';
import { ADD_COMMENT } from '../actions';

export const commentReducer = (state = data, action) => {
  if (action.type === ADD_COMMENT) {
    return state.map(item => {
      if (item.id === action.id) {
        return {
          ...item,
          comments: [
            ...item.comments,
            { commentId: action.userId, comment: action.text },
          ],
        };
      }
      return item;
    });
  }

  return state;
};

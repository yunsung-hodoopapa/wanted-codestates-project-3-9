import { data } from '../../model/data';
import { TOGGLE_LIKE } from '../actions';

const initialState = {
  data,
};

export const interactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE: {
      const updatedData = state.data.map(item => {
        if (item.id === action.id) {
          if (item.isClicked === true) {
            console.log('here2');
            return {
              ...item,
              likeCnt: Number(item.likeCnt) - 1,
              isClicked: false,
            };
          } else {
            console.log('here3');
            return {
              ...item,
              likeCnt: Number(item.likeCnt) + 1,
              isClicked: true,
            };
          }
        } else {
          return item;
        }
      });
      return {
        ...state,
        data: updatedData,
      };
    }
    default:
      return state;
  }
};

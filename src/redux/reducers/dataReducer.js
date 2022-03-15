import { GET_DATA, TOGGLE_LIKE } from '../actions';
import { initialState } from './initialState';

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE: {
      const updatedData = state.data.map(item => {
        if (item.id === action.id) {
          if (item.isClicked === true) {
            return {
              ...item,
              likeCnt: Number(item.likeCnt) - 1,
              isClicked: false,
            };
          } else {
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
    default: {
      return state;
    }
  }
};

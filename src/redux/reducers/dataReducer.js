import { GET_DATA, POST_DATA } from '../actions';
import { initialState } from './initialState';

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA: {
      return {
        ...state,
        data: [...state.data, action.post],
      };
    }
    case GET_DATA: {
      return {
        ...state,
        length: state.length + 9,
      };
    }
    default: {
      return state;
    }
  }
};

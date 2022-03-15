import { GET_DATA, POST_DATA } from '../actions';
import { initialState } from './initialState';

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_DATA: {
    //   return {
    //     ...state,
    //     length: action.length,
    //   };
    // }
    case POST_DATA: {
      return { data: [...state.data, action.post] };
    }
    default: {
      return state;
    }
  }
};

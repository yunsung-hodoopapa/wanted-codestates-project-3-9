import { GET_DATA } from '../actions';

const initialState = {
  length: 18,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        length: action.length,
      };
    }
    default: {
      return state;
    }
  }
};

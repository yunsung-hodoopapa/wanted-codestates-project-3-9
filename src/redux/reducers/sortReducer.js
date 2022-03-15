import {
  SORT_BY_COMMENT,
  SORT_BY_DATE,
  SORT_BY_LIKE,
  SORT_BY_RANDOM,
} from '../actions';

const initialState = {
  data: [],
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_DATE: {
      return {
        ...state,
        data: state.data.sort((a, b) => b.createDt - a.createDt),
      };
    }
    case SORT_BY_LIKE: {
      return {
        ...state,
        data: state.data.sort((a, b) => b.likeCnt - a.likeCnt),
      };
    }
    case SORT_BY_COMMENT: {
      return {
        ...state,
        data: state.data.sort((a, b) => b.comments.length - a.comments.length),
      };
    }
    case SORT_BY_RANDOM: {
      return {
        ...state,
        data: state.data.sort(() => Math.random() - 0.5),
      };
    }
    default:
      return state;
  }
};

import {
  GET_DATA,
  POST_DATA,
  SORT_BY_DATE,
  SORT_BY_LIKE,
  SORT_BY_COMMENT,
  SORT_BY_RANDOM,
} from '../actions';
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
    case SORT_BY_DATE: {
      const data = [...state.data];
      data.sort((a, b) => b.createDt - a.createDt);
      return {
        ...state,
        data,
      };
    }
    case SORT_BY_LIKE: {
      const data = [...state.data];
      data.sort((a, b) => b.likeCnt - a.likeCnt);
      return {
        ...state,
        data,
      };
    }
    case SORT_BY_COMMENT: {
      const data = [...state.data];
      data.sort((a, b) => b.comments.length - a.comments.length);
      return {
        ...state,
        data,
      };
    }
    case SORT_BY_RANDOM: {
      const data = [...state.data];
      data.sort(() => Math.random() - 0.5);
      return {
        ...state,
        data,
      };
    }
    default: {
      return state;
    }
  }
};

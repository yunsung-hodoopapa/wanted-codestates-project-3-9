import {
  SORT_BY_COMMENT,
  SORT_BY_DATE,
  SORT_BY_LIKE,
  SORT_BY_RANDOM,
} from '../actions';
import { initialState } from './initialState';

export const sortReducer = (state = initialState, action) => {
  const data = [...state.data];
  switch (action.type) {
    case SORT_BY_DATE: {
      data.sort((a, b) => b.createDt - a.createDt);
      return {
        ...state,
        data,
      };
    }
    case SORT_BY_LIKE: {
      data.sort((a, b) => b.likeCnt - a.likeCnt);
      return {
        ...state,
        data,
      };
    }
    case SORT_BY_COMMENT: {
      data.sort((a, b) => b.comments.length - a.comments.length);
      return {
        ...state,
        data,
      };
    }
    case SORT_BY_RANDOM: {
      data.sort(() => Math.random() - 0.5);
      return {
        ...state,
        data,
      };
    }
    default:
      return state;
  }
};

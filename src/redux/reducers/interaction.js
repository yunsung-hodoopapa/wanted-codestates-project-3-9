import { data } from "../../model/data";
import { TOGGLE_LIKE } from "../actions";

const initialState = {
  data,
  isClicked: false,
}

export const interactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE: {
      const likeCnt = state.data.map(item => {
        if (item.id === action.id) {
          if (item.isClicked === false) {
            return {
              ...item,
              likeCnt: item.likeCnt + 1,
              isClicked: true,
            }
          } else {
            return {
              ...item,
              likeCnt: item.likenCnt - 1,
              isClicked: false,
            }
          }
        } else {
          return item;
        }
      });
    }
  }
}
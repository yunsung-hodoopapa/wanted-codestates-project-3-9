export const ADD_COMMENT = 'ADD_COMMENT';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

export const comment = (id, userId, text) => {
  return {
    type: ADD_COMMENT,
    id,
    userId,
    text,
  };
};

export const toggleLikeButton = (id) => {
  return {
    type: TOGGLE_LIKE,
    id,
  };
};

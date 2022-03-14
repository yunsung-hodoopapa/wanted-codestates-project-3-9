export const ADD_COMMENT = 'ADD_COMMENT';

export const comment = (id, userId, text) => {
  return {
    type: ADD_COMMENT,
    id,
    userId,
    text,
  };
};

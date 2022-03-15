import Filter from "../components/Filter";

export const ADD_COMMENT = 'ADD_COMMENT';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const ADD_POST = 'ADD_POST';
export const GET_DATA = 'GET_DATA';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SORT_BY_LIKE = 'SORT_BY_LIKE';
export const SORT_BY_COMMENT = 'SORT_BY_COMMENT';
export const SORT_BY_RANDOM = 'SORT_BY_RANDOM';

export const comment = (id, userId, text, date) => {
  return {
    type: ADD_COMMENT,
    id,
    userId,
    text,
    date,
  };
};

export const toggleLikeButton = id => {
  return {
    type: TOGGLE_LIKE,
    id,
  };
};

export const addPost = post => {
  console.log(post);
  return {
    type: ADD_POST,
    post,
  };
};

export const getData = (data, slice, isLoaded) => {
  const filetered = data.slice(slice[0], slice[1]);
  const incomming = [slice[0]+19, slice[1]+19]
  return {
    type: GET_DATA,
    payload: {
      data: filetered,
      isLoaded,
      slice: incomming,
    },
  };
};

export const sortByDate = () => {
  return {
    type: SORT_BY_DATE,
  };
};

export const sortByLike = () => {
  return {
    type: SORT_BY_LIKE,
  };
};

export const sortByComment = () => {
  return {
    type: SORT_BY_COMMENT,
  };
};

export const sortByRandom = () => {
  return {
    type: SORT_BY_RANDOM,
  };
};

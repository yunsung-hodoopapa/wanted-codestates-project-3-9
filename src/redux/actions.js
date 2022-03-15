export const ADD_COMMENT = 'ADD_COMMENT';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const ADD_POST = 'ADD_POST';
export const GET_DATA = 'GET_DATA';
export const POST_DATA = 'POST_DATA';
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

export const postData = post => {
  console.log(post);
  return {
    type: POST_DATA,
    post,
  };
};

// {
//   id: '1',
//   productNm: '블랙 핸드백',
//   productImg: [
//     'https://i.balaan.io/review/c836c897ce27f22497d14d8e9f461ece.webp',
//   ],
//   createDt: 1645401600,
//   review: '무난하게 데일리로 활용중입니다.',
//   reviewRate: 3,
//   likeCnt: 244,
//   comments: [],
// },
export const getData = length => {
  return {
    type: GET_DATA,
    payload: {
      length,
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

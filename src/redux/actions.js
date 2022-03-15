export const ADD_COMMENT = 'ADD_COMMENT';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const ADD_POST = 'ADD_POST';

export const comment = (id, userId, text) => {
  return {
    type: ADD_COMMENT,
    id,
    userId,
    text,
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

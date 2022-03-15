import { ADD_COMMENT } from '../actions';

const initialState = [
  {
    id: '1',
    commentId: '플립',
    comment: '너무 예뻐요~',
    commentDt: 1645810205093,
  },
  {
    id: '1',
    commentId: '윤솔',
    comment: '상품정보 알 수 있을까요?',
    commentDt: 1646310205093,
  },
  {
    id: '1',
    commentId: 'ㅇㅇ',
    comment: '예뻐요',
    commentDt: 1647310205093,
  },
  {
    id: '373189c2-9ab8-11ec-b909-0242ac120002',
    commentId: '키키',
    comment: '내부 수납공간은 어떤가요?',
    commentDt: 1646320205093,
  },
  {
    id: '373189c2-9ab8-11ec-b909-0242ac120002',
    commentId: 'ㅇㅇ',
    comment: '크기에 비해서 수납공간이 많은 것 같아요!',
    commentDt: 1646520205093,
  },
  {
    id: '373189c2-9ab8-11ec-b909-0242ac120002',
    commentId: '뭐야',
    comment: '감사합니다. ~',
    commentDt: 1646920205093,
  },
  {
    id: '37318df0-9ab8-11ec-b909-0242ac120002',
    commentId: '닉넴',
    comment: '팬츠 정보 알 수 있을까요?',
    commentDt: 1646520205093,
  },
  {
    id: '37319246-9ab8-11ec-b909-0242ac120002',
    commentId: 'ㅋㅋ',
    comment: '실착 사이즈는 잘 맞나요?',
    commentDt: 1646820205093,
  },
  {
    id: '373194f8-9ab8-11ec-b909-0242ac120002',
    commentId: '여니',
    comment: '공감합니다.',
    commentDt: 1646220205093,
  },
];
export const commentReducer = (state = initialState, action) => {
  if (action.type === ADD_COMMENT) {
    return [
      ...state,
      {
        id: action.id,
        commentId: action.userId,
        comment: action.text,
        commentDt: action.date,
      },
    ];
  }
  return state;
};

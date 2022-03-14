import React from 'react';
import styled from 'styled-components';

const comments = [
  {
    commentId: '9bed8c34-9ab9-11ec-b909-0242ac120002',
    comment: '내부 수납공간은 어떤가요?',
  },
  {
    commentId: '9bed8acc-9ab9-11ec-b909-0242ac120002',
    comment: '크기에 비해서 수납공간이 많은 것 같아요!',
  },
  {
    commentId: '9bed891e-9ab9-11ec-b909-0242ac120002',
    comment: '감사합니다~!',
  },
];

const Comment = () => {
  return (
    <Wrap>
      <CommentUl>
        {comments.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <UserId>{item.commentId}</UserId>
                <p>{item.comment}</p>
              </div>
              <span>8 분전</span>
            </li>
          );
        })}
      </CommentUl>
      <Input>
        <input type="text" placeholder="댓글을 입력해주세요." />
        <button type="button">게시</button>
      </Input>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #eee;
  padding-bottom: 10px;
`;

const CommentUl = styled.ul`
  li {
    padding: 15px 20px;
    border-top: 1px solid #ccc;
  }
  span {
    line-height: 30px;
    color: #aaa;
    font-size: 14px;
  }
`;

const UserId = styled.p`
  padding-right: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Input = styled.div`
  display: flex;
  width: calc(100% - 40px);
  height: 40px;
  margin: 0px 20px 20px;
  border: 1px solid #ccc;
  border-radius: 40px;
  background-color: #fff;
  box-sizing: border-box;
  input {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 20px;
    border: none;
    border-radius: 40px;
    outline: none;
    box-sizing: border-box;
    font-size: 18px;
  }
  button {
    width: 100px;
    height: 100%;
    margin: 0;
    padding: 0 20px;
    border-radius: 40px;
    border: 0;
    background-color: #fff;
    font-size: 18px;
    cursor: pointer;
    :hover {
      font-weight: bold;
    }
  }
`;

export default Comment;

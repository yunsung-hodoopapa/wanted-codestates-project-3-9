import React from 'react';
import styled from 'styled-components';
import Grade from '../components/Grade';
import ReviewTitle from '../components/ReviewTitle';
import ImageRegister from '../components/ImageRegister';
const Review = () => {
  return (
    <ReviewContainer>
      <ReviewTitle titleName={'제목'} />
      <TitleInput
        type="text"
        placeholder="리뷰 제목을 입력해주세요"
      ></TitleInput>
      <ReviewTitle titleName={'내용'} />
      <ContentArea
        type="text"
        placeholder="리뷰 내용을 입력해주세요"
      ></ContentArea>
      <ImageRegister />
      <Grade />
      <SubmitContainer>
        <SubmitBtn>리뷰 등록하기</SubmitBtn>
      </SubmitContainer>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  margin: auto;
  width: 500px;
`;

const TitleInput = styled.input`
  width: 480px;
  padding: 10px;
  margin-bottom: 10px;
`;
const ContentArea = styled.textarea`
  width: 480px;
  height: 200px;
  padding: 10px;
  resize: none;
  margin-bottom: 10px;
`;
const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SubmitBtn = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  line-height: 60px;
  width: 400px;
  height: 60px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;
export default Review;

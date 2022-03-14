import React from 'react';
import styled from 'styled-components';
import { data } from '../../model/data';
import LikeButton from './LikeButton';

const List = () => {
  return (
    <ListWrap>
      {data.map((item, index) => {
        const { id, productNm, productImg, reviewRate, likeCnt, review } = item;
        return (
          <ContentsContainer key={id}>
            <Image src={`${productImg}`} />
            <InfoContainer>
              <LabelWrapper>
                <BsHandThumbsUp />
                <span>{likeCnt}</span>
              </LabelWrapper>
              <LabelWrapper>
                <span>{reviewRate}</span>
              </LabelWrapper>
              <LabelWrapper>
                <h2>{productNm}</h2>
              </LabelWrapper>
              <LabelWrapper>
                <span>{review}</span>
              </LabelWrapper>
            </InfoContainer>
          </ContentsContainer>
        );
      })}
    </ListWrap>
  );
};

const ListWrap = styled.div`
  width: 500px;
  overflow-y: scroll;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid blue;
`;

const Image = styled.div`
  height: 677px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 150px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LabelWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  h2 {
    font-weight: 800;
  }
`;

export default List;

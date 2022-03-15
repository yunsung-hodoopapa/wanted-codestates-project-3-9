import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toggleLikeButton } from '../../redux/actions';
import Grade from '../Grade';
import Comment from '../Comment';

const List = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.interaction.data);

  const clickLikeBtn = id => {
    dispatch(toggleLikeButton(id));
  };

  const getStarfromRate = reviewRate => {
    let initClicked = [false, false, false, false, false];
    for (let i = 0; i < reviewRate; i++) {
      initClicked[i] = true;
    }
    return initClicked;
  };

  return (
    <Wrapper>
      {data.map(item => {
        const {
          id,
          productNm,
          productImg,
          reviewRate,
          likeCnt,
          review,
          isClicked,
        } = item;
        return (
          <ContentsContainer key={id}>
            <img src={productImg} alt={productNm} />
            <InfoContainer>
              <Like onClick={() => clickLikeBtn(id)}>
                <i>
                  {isClicked ? (
                    <AiFillHeart color="red" size={18} />
                  ) : (
                    <AiOutlineHeart size={18} />
                  )}
                </i>
                <span>{likeCnt}</span>
              </Like>
              <i>
                <Grade clicked={getStarfromRate(reviewRate)} size={15} />
              </i>
              <h2>{productNm}</h2>
              <p>{review}</p>
            </InfoContainer>
            <Comment />
          </ContentsContainer>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 40px 16px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  i div {
    display: block;
    margin: 20px 0;
  }
  h2 {
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 20px;
  }
  p {
    line-height: 20px;
  }
`;

const Like = styled.div`
  i svg {
    margin-bottom: -2px;
    margin-right: 5px;
  }
`;

export default List;

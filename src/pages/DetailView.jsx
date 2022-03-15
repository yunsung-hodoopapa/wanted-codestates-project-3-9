import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toggleLikeButton } from '../redux/actions';
import Grade from '../components/Grade';
import Comment from '../components/Comment';
import { useLocation } from 'react-router-dom';

const DetailView = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.interaction.data);
  const location = useLocation();
  const path = location.pathname.split('/');
  const pageId = path[path.length - 1];

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

  const { id, productNm, productImg, reviewRate, likeCnt, review, isClicked } =
    data.find(item => item.id === pageId);

  return (
    <Wrapper>
      <ContentsContainer key={id}>
        <img src={`${productImg}`} />
        <InfoContainer>
          <LabelWrapper>
            <span onClick={() => clickLikeBtn(id)}>
              {isClicked ? (
                <AiFillHeart color="red" size={18} />
              ) : (
                <AiOutlineHeart size={18} />
              )}
              {likeCnt}
            </span>
          </LabelWrapper>
          <LabelWrapper>
            <Grade clicked={getStarfromRate(reviewRate)} size={15} />
          </LabelWrapper>
          <LabelWrapper>
            <h2>{productNm}</h2>
          </LabelWrapper>
          <br />
          <LabelWrapper>
            <span>{review}</span>
          </LabelWrapper>
          <br />
        </InfoContainer>
        <Comment />
      </ContentsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  overflow-y: scroll;
  margin-left: auto;
  margin-right: auto;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LabelWrapper = styled.div`
  display: flex;
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default DetailView;

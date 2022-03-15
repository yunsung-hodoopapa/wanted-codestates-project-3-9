import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { toggleLikeButton, getData } from '../redux/actions';
import Grade from './Grade';
import Comment from './Comment';
import { exactPathCopy } from '../util/index';

const defaultOption = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px',
};

const List = () => {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const { data, length } = useSelector(state => ({
    length: state.data.length,
    data: state.data.data,
  }));

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

  const onIntersect = ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      dispatch(getData());
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    if (data.length === length) {
      alert('모든 데이터를 불러왔습니다.');
      setIsLoaded(false);
    }
  }, [length]);

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, defaultOption);
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <Wrapper>
      {data.slice(0, length).map(item => {
        const {
          id,
          productNm,
          productImg,
          reviewRate,
          likeCnt,
          review,
          isClicked,
          comments,
        } = item;
        return (
          <ContentsContainer key={id}>
            <img src={productImg} alt={productNm} />
            <InfoContainer>
              <FlexContainer>
                <div>
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
                </div>
                <AiOutlineShareAlt
                  size={20}
                  onClick={() => exactPathCopy(id)}
                />
              </FlexContainer>
              <h2>{productNm}</h2>
              <p>{review}</p>
            </InfoContainer>
            <Comment userId={id} />
          </ContentsContainer>
        );
      })}
      {isLoaded && <div ref={setTarget} className="Target-Element"></div>}
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

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Like = styled.div`
  i svg {
    margin-bottom: -2px;
    margin-right: 5px;
  }
`;

export default List;

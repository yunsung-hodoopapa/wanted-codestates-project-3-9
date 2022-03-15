import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/actions';

const defaultOption = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px',
};

const Grid = () => {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, length } = useSelector(state => ({
    length: state.data.length,
    data: state.data.data,
  }));

  useEffect(() => {
    if (data.length === length) {
      alert('모든 데이터를 불러왔습니다.');
      setIsLoaded(false);
    }
  }, [length]);

  const moveDetailPage = id => {
    navigate(`/detail/${id}`);
  };

  const onIntersect = ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      dispatch(getData());
      observer.observe(entry.target);
    }
  };

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
      <Items>
        {data.slice(0, length).map((item, idx) => {
          const { id } = item;
          return (
            <li key={id} onClick={() => moveDetailPage(id)}>
              <img src={item.productImg[0]} />
            </li>
          );
        })}
      </Items>
      {isLoaded && <div ref={setTarget} className="Target-Element"></div>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-direction: column;
  width: 500px;

  .Target-Element {
    width: 100vw;
    height: 50px;
  }
`;

const Items = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3px;

  li {
    aspect-ratio: 1 / 1;
    overflow: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
    min-height: 165px;
  }
`;

export default Grid;

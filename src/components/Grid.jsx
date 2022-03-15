import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { data } from '../model/data';
import { useNavigate } from 'react-router';

const defaultOption = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px',
};

const Grid = ({ dataList, setDataList }) => {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(2);
  const navigate = useNavigate();

  const addItems = () => {
    if (dataList.length === data.length) {
      alert('더 이상 불러올 데이터가 없습니다.');
      setIsLoaded(false);
      return;
    }
    setIsLoaded(true);
    // setDataList(data.slice(0, );
    setIsLoaded(false);
  };

  const moveDetailPage = id => {
    navigate(`/detail/${id}`);
  };

  const onIntersect = ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      console.log('check', entry.isIntersecting);
      observer.unobserve(entry.target);
      addItems();
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
        {dataList.map((item, idx) => {
          const { id } = item;
          return (
            <li key={id} onClick={() => moveDetailPage(id)}>
              <img src={item.productImg[0]} />
            </li>
          );
        })}
      </Items>
      <div ref={setTarget} className="Target-Element"></div>
    </Wrapper>
  );
};

Grid.propTypes = {
  dataList: PropTypes.array,
  setDataList: PropTypes.func,
};

const Wrapper = styled.div`
  flex-direction: column;
  width: 500px;

  .Target-Element {
    width: 100vw;
    height: 1px;
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

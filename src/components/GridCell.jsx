import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GridCell = ({ dataList }) => {
  const navigate = useNavigate();

  const moveDetailContents = id => {
    navigate(`/detail/${id}`);
  };

  return (
    <Wrapper>
      <Items>
        {dataList.map(item => {
          const { id } = item;
          return (
            <li key={id}>
              <img
                src={item.productImg[0]}
                onClick={() => moveDetailContents(id)}
              />
            </li>
          );
        })}
      </Items>
    </Wrapper>
  );
};

GridCell.propTypes = {
  dataList: PropTypes.array,
};

const Wrapper = styled.div`
  flex-direction: column;
  width: 500px;
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

export default GridCell;

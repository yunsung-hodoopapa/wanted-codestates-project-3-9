import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = ({ dataList }) => {
  return (
    <Wrapper>
      <Items>
        {dataList.map((item, idx) => {
          return (
            <li key={idx + 1}>
              <img src={item.productImg[0]} alt={item.productNm} />
            </li>
          );
        })}
      </Items>
    </Wrapper>
  );
};

List.propTypes = {
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

export default List;

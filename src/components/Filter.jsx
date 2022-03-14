import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterList = styled.div`
  ul {
    display: flex;
    li {
      padding: 10px;
      margin: 15px 10px;
      background-color: #e7e8f9;
      border-radius: 20px;
      color: #4348a2;
      font-weight: 900;
      cursor: pointer;
    }
  }
`;

const Filter = ({ data, setDataList }) => {
  const copyData = [...data];

  useEffect(() => {
    setDataList(copyData.sort((a, b) => b.createDt - a.createDt));
  }, []);

  const handleFilter = e => {
    if (!e.target.matches('.filterListWrapper > li')) return;
    if (e.target.matches('.byDate')) {
      setDataList(copyData.sort((a, b) => b.createDt - a.createDt));
    } else if (e.target.matches('.byLike')) {
      setDataList(copyData.sort((a, b) => b.likeCnt - a.likeCnt));
    } else if (e.target.matches('.byComment')) {
      setDataList(
        copyData.sort((a, b) => b.comments.length - a.comments.length),
      );
    }
  };

  return (
    <FilterList>
      <ul className="filterListWrapper" onClick={handleFilter}>
        <li className="byDate">최신순</li>
        <li className="byLike">좋아요 많은순</li>
        <li className="byComment">댓글 많은순</li>
      </ul>
    </FilterList>
  );
};

Filter.propTypes = {
  dataList: PropTypes.array,
  setDataList: PropTypes.func,
  data: PropTypes.array,
};

export default Filter;

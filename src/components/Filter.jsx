import React, { useState } from 'react';
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
      &.active {
        background: #9900ff;
        color: white;
        transition: all 0.5s;
      }
    }
  }
`;

const Filter = ({ data, setDataList }) => {
  const contentList = [
    {
      id: 1,
      content: '최신순',
      class: 'byDate',
    },
    {
      id: 2,
      content: '좋아요 많은순',
      class: 'byLike',
    },
    {
      id: 3,
      content: '댓글 많은순',
      class: 'byComment',
    },
    {
      id: 4,
      content: '랜덤',
      class: 'byRandom',
    },
  ];

  const [tabNumber, setTabNumber] = useState(1);

  const handleFilter = (e, id) => {
    if (e.target.matches('.byDate')) {
      setDataList(data.sort((a, b) => b.createDt - a.createDt));
    } else if (e.target.matches('.byLike')) {
      setDataList(data.sort((a, b) => b.likeCnt - a.likeCnt));
    } else if (e.target.matches('.byComment')) {
      setDataList(data.sort((a, b) => b.comments.length - a.comments.length));
    } else if (e.target.matches('.byRandom')) {
      setDataList(data.sort(() => Math.random() - 0.5));
    }
    setTabNumber(id);
  };

  return (
    <FilterList>
      <ul className="filterListWrapper">
        {contentList.map((value, index) => (
          <li
            onClick={e => handleFilter(e, value.id)}
            key={index}
            className={`${value.class} ${
              tabNumber === value.id ? 'active' : ''
            }`}
          >
            {value.content}
          </li>
        ))}
      </ul>
    </FilterList>
  );
};

Filter.propTypes = {
  setDataList: PropTypes.func,
  data: PropTypes.array,
};

export default Filter;

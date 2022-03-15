import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  sortByDate,
  sortByLike,
  sortByComment,
  sortByRandom,
} from '../redux/actions';
import { useDispatch } from 'react-redux';

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

const Filter = () => {
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortByDate());
  }, []);

  const handleFilter = (e, id) => {
    if (e.target.matches('.byDate')) {
      dispatch(sortByDate());
    } else if (e.target.matches('.byLike')) {
      dispatch(sortByLike());
    } else if (e.target.matches('.byComment')) {
      dispatch(sortByComment());
    } else if (e.target.matches('.byRandom')) {
      dispatch(sortByRandom());
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

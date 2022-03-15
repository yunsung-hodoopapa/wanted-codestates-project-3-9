import React from 'react';
import { BsGrid3X3, BsViewList } from 'react-icons/bs';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabComponent = styled.div`
  width: 100%;
  ul {
    display: flex;
    li {
      width: 50%;
      text-align: center;
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      svg {
        vertical-align: middle;
        color: #ccc;
      }
    }
  }
  .selected {
    border-bottom: 1px solid black;
    svg {
      color: black;
    }
  }
`;

const Tab = ({ handleChange, active }) => {
  return (
    <TabComponent>
      <ul onClick={handleChange}>
        <li className={`grid ${active === 'grid' ? 'selected' : ''}`}>
          <BsGrid3X3 size="20" />
        </li>
        <li className={`list ${active === 'list' ? 'selected' : ''}`}>
          <BsViewList size="20" />
        </li>
      </ul>
    </TabComponent>
  );
};

Tab.propTypes = {
  handleChange: PropTypes.func,
  active: PropTypes.string,
};

export default Tab;

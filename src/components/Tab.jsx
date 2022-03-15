import React, { useState } from 'react';
import { BsGrid3X3, BsViewList } from 'react-icons/bs';
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

const Tab = () => {
  const [active, setActive] = useState('grid');

  const handleChange = e => {
    if (e.target.matches('.grid')) {
      setActive('grid');
    } else {
      setActive('list');
    }
  };

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

export default Tab;

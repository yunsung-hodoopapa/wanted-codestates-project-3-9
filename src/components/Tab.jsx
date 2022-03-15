import React from 'react';
import { BsGrid3X3, BsViewList } from 'react-icons/bs';
import styled from 'styled-components';

const TabComponent = styled.div`
  width: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  ul {
    display: flex;
    li {
      width: 50%;
      text-align: center;
      padding: 15px 0;
      cursor: pointer;
      svg {
        vertical-align: middle;
      }
    }
  }
`;

const Tab = () => {
  return (
    <TabComponent>
      <ul>
        <li>
          <BsGrid3X3 size="20" />
        </li>
        <li>
          <BsViewList size="20" />
        </li>
      </ul>
    </TabComponent>
  );
};

export default Tab;

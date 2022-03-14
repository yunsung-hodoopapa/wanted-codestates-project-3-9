import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import DetailView from './DetailView';
import List from '../components/List/List';

const Main = () => {
  return (
    <MainWrap>
      <Header />
      <MainContainer>
        <List />
      </MainContainer>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  background-color: #f7f6fb;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const MainContainer = styled.div`
  width: 500px;
  background-color: #fffff;
`;

export default Main;

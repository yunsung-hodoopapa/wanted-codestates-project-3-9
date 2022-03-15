import React, { useState } from 'react';
import Filter from '../components/Filter';
import Header from '../components/Header';
import Tab from '../components/Tab';
import List from '../components/List/List';
import { data } from '../model/data';
import styled from 'styled-components';

const MainComponent = styled.main`
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 5px 0 20px 3px #f3f3f3, -5px 0 20px 3px #f3f3f3;
`;

const Main = () => {
  const [dataList, setDataList] = useState([]);

  return (
    <MainComponent>
      <Header />
      <Tab />
      <Filter dataList={dataList} setDataList={setDataList} data={data} />
      {/* <List dataList={dataList} /> */}
      <List />
    </MainComponent>
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

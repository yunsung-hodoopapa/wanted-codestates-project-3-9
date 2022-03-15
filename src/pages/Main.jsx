import React, { useState } from 'react';
import Filter from '../components/Filter';
import Header from '../components/Header';
import Tab from '../components/Tab';
import List from '../components/List/List';
import Grid from '../components/Grid';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const MainComponent = styled.main`
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 5px 0 20px 3px #f3f3f3, -5px 0 20px 3px #f3f3f3;
`;

const Main = () => {
  const data = useSelector(state => state.sort.data);
  const data2 = useSelector(state => state.sort);
  console.log(data2);

  const [dataList, setDataList] = useState(data.slice(0, 18));
  const [active, setActive] = useState('grid');

  return (
    <MainComponent>
      <Header />
      <Tab active={active} setActive={setActive} />
      <Filter data={data} setDataList={setDataList} />
      {active === 'grid' ? (
        <Grid dataList={data} setDataList={setDataList} />
      ) : (
        <List dataList={data} />
      )}
    </MainComponent>
  );
};

export default Main;

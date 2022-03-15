import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import Header from '../components/Header';
import Tab from '../components/Tab';
import List from '../components/List/List';
import Grid from '../components/Grid';
// import { data } from '../model/data';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const MainComponent = styled.main`
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 5px 0 20px 3px #f3f3f3, -5px 0 20px 3px #f3f3f3;
`;

const Main = () => {
  const data = useSelector(state => state.interaction.data);
  const [dataList, setDataList] = useState(data.slice(0, 18));
  const [active, setActive] = useState('grid');
  console.log(data);
  console.log(dataList);

  const handleChange = e => {
    if (e.target.matches('.grid')) {
      setActive('grid');
    } else {
      setActive('list');
    }
  };

  useEffect(() => {
    console.log('리랜더링');
  }, [data]);

  return (
    <MainComponent>
      <Header />
      <Tab active={active} setActive={setActive} />
      <Filter data={dataList} setDataList={setDataList} />
      {active === 'grid' ? (
        <Grid dataList={dataList} setDataList={setDataList} />
      ) : (
        <List dataList={dataList} />
      )}
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
  background-color: #ffffff;
`;

export default Main;

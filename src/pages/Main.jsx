import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import Header from '../components/Header';
import Tab from '../components/Tab';
import List from '../components/List';
import Grid from '../components/Grid';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { resetData } from '../redux/actions';

const MainComponent = styled.main`
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 5px 0 20px 3px #f3f3f3, -5px 0 20px 3px #f3f3f3;
`;

const Main = () => {
  const data = useSelector(state => state.data.data);
  const dispatch = useDispatch();
  const [active, setActive] = useState('grid');

  const handleChange = e => {
    if (e.target.matches('.grid')) {
      console.log('grid');
      setActive('grid');
    } else {
      console.log('list');
      setActive('list');
    }
    dispatch(resetData());
  };

  return (
    <MainComponent>
      <Header />
      <Tab handleChange={handleChange} active={active} />
      <Filter data={data} />
      {active === 'grid' ? <Grid /> : <List />}
    </MainComponent>
  );
};

export default Main;

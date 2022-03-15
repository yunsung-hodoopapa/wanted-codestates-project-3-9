import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import DetailView from './pages/DetailView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailView" element={<DetailView />} />
        {/* <Route path="/review/id" elemeent={<Review />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

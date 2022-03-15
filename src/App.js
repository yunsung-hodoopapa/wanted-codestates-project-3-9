import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import DetailView from './pages/DetailView';
import Review from './pages/Review';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailView" element={<DetailView />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

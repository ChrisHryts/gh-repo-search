import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      
    </Router>
  );
};

export default App;

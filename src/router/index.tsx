import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Procedimientos from '../pages/Procedimientos/Procedimientos';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/procedimientos" replace />} />
        <Route path="/procedimientos" element={<Procedimientos />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

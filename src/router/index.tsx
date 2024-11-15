import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Procedimientos from '../pages/Procedimientos/Procedimientos';
import EstudiosManager from '../pages/Estudios/Estudios';


const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/procedimientos" replace />} />
      <Route path="/procedimientos" element={<Procedimientos />} />
      <Route path="/estudios" element={<EstudiosManager />} />
    </Routes>
  );
};

export default AppRouter;

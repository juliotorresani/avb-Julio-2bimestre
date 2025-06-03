// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';
import Favoritos from '../pages/Favoritos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  );
};

export default AppRoutes;

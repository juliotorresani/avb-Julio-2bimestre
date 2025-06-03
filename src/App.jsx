import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // importar seu Navbar existente
import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import Favoritos from './pages/Favoritos';

const App = () => {
  return (
    <>
      <Navbar />  {/* Aqui */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </>
  );
};

export default App;

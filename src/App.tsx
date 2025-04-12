import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Inicio from './Pages/Inicio';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import Servicos from './Pages/Servicos';
import Projetos from './Pages/Projetos';
import Uteis from './Pages/Uteis';

const App = () => {
  return (
    <Router>
      <Header />
      <Menu />
      <Banner />
      <Routes>
        <Route path="/" element={<Inicio />} /> 
        <Route path="/sobre" element={<Sobre />} /> 
        <Route path="/contato" element={<Contato  />} /> 
        <Route path="/servicos" element={<Servicos />} /> 
        <Route path="/projetos" element={<Projetos />} /> 
        <Route path="/uteis" element={<Uteis />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

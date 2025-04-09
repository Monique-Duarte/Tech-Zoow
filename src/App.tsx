import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Paginas/Inicio';
import Sobre from './components/Paginas/Sobre';
import Contato from './components/Paginas/Contato';
import Servicos from './components/Paginas/Servicos';
import Projetos from './components/Paginas/Projetos';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Uteis from './components/Paginas/LinksUteis';

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

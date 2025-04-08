import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Conteudo';
import Inicio from './components/Inicio';
import Sobre from './components/Conteudo/Sobre';
import Contato from './components/Contacts';
import Missao from './components/Conteudo/missao';
import Servicos from './components/Serviços';
import Projetos from './components/Projetos';

const App: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleMenu = (): void => setIsExpanded(prev => !prev);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Layout isExpanded={isExpanded} toggleMenu={toggleMenu} />} 
        >
          <Route index element={<Inicio isExpanded={isExpanded} />} /> 
          <Route path="/sobre" element={<Sobre isExpanded={isExpanded} />} /> 
          <Route path="/missao" element={<Missao isExpanded={isExpanded} />} /> 
          <Route path="/contato" element={<Contato isExpanded={isExpanded} />} /> 
          <Route path="/servicos" element={<Servicos isExpanded={isExpanded} />} /> 
          <Route path="/projetos" element={<Projetos isExpanded={isExpanded} />} /> 
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

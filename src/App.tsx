import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Conteudo';
import Inicio from './components/Inicio';
import Sobre from './components/Conteudo/Sobre';
import Contato from './components/Contacts';

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
          <Route path="/contato" element={<Contato isExpanded={isExpanded} />} /> 
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

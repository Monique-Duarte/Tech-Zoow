import { useState } from 'react';
import Conteudo from './conteudo';
import Menu from '../Menu';


const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = () => setIsExpanded(prev => !prev);

  return (
    <div className="flex">
      <Menu isExpanded={isExpanded} toggleMenu={toggleMenu} />
      <Conteudo isExpanded={isExpanded} />
    </div>
  );
};

export default Layout;

import { useState } from 'react';

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = () => setIsExpanded(prev => !prev);

  return (
    <nav className="text-black fixed ml-10 top-2/3 transform -translate-y-1/2 p-1 h-full">
      <div className="top-1/2 transform -translate-y-1/2">
        <i
          className={`bi bi-list p-0 h-fit fs-4 cursor-pointer m-0 ${isExpanded ? 'text-primary' : ''}`}
          onClick={toggleMenu}
        ></i>
      </div>
      <ul
        className={`p-0 transition-opacity duration-300 ease-in-out ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-y-hidden'}`}
      >
        <a className="bi bi-person-vcard fs-4 p-0" href="/#Sobre" onClick={toggleMenu}>
        </a>
        <a className="bi bi-person fs-4 p-0" href="/#">
        </a>
        <a className="bi bi-book fs-4 p-0" href="/#Conhecimentos">
        </a>
        <a className="bi bi-code-slash fs-4 p-0" href="/#Projetos">
        </a>
      </ul>
    </nav>
  );
};

export default Menu;
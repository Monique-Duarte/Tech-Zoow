import { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = () => setIsExpanded(prev => !prev);

  return (
    <nav className="text-black fixed top-2/3 transform -translate-y-1/2 p-2 w-[15vw] h-full">
      <div className="top-1/2 transform -translate-y-1/2">
        <i
          className={`bi bi-list p-0 h-fit text-3xl cursor-pointer m-0 ${isExpanded ? 'text-primary' : ''}`}
          onClick={toggleMenu}
        ></i>
      </div>
      <ul
        className={`w-[100%] p-0 transition-opacity duration-300 ease-in-out ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-y-hidden'}`}
      >
        <li className='flex w-[100%] mb-2'>
          <Link to="/" onClick={toggleMenu}>
            <p className='text-2xl'> <i className='bi bi-house p-0'></i> Início </p>
          </Link>
        </li>
        <li className='flex w-[100%] mb-2'>
          <Link to="/sobre" onClick={toggleMenu}>
            <p className='text-2xl'> <i className='bi bi-person-vcard p-0'></i> Sobre </p>
          </Link>
        </li>
        <li className='flex w-[100%] mb-2'>
          <Link to="/contact" onClick={toggleMenu}>
            <p className='text-2xl'> <i className='bi bi-person fs-4 p-0'></i> Contato </p>
          </Link>
        </li>
        <li className='flex w-[100%] mb-2'>
          <Link to="/links" onClick={toggleMenu}>
            <p className='text-2xl'> <i className='bi bi-book fs-4'></i> Links </p>
          </Link>
        </li>
        <li className='flex w-[100%] mb-2'>
          <Link to="/projetos" onClick={toggleMenu}>
            <p className='text-2xl'> <i className='bi bi-code-slash'></i> Projetos </p>
          </Link>
        </li>
        <li className='flex w-[100%] mb-2'>
          <Link to="/apps" onClick={toggleMenu}>
            <p className='text-2xl'> <i className='bi bi-send-arrow-down-fill'></i> Aplicativos </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

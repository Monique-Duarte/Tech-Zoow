import { Link } from 'react-router-dom';
import MenuProps from '../Interfaces/MenuProps';


const Menu: React.FC<MenuProps> = ({ isExpanded, toggleMenu }) => {
  return (
    <nav className="text-black fixed top-2/3 transform -translate-y-1/2 p-2 h-full">
      <div className="top-1/2 transform -translate-y-1/2">
        <i
          className={`bi bi-list p-0 h-fit text-l md:text-3xl cursor-pointer m-0 ${isExpanded ? 'text-primary' : ''} transition-all duration-300`}
          onClick={toggleMenu}
        ></i>
      </div>
      <ul
        className={`w-[${isExpanded ? '0vw' : '0vw'}] p-0 transition-all duration-300 ease-in-out`}
      >
        <li className="flex items-center justify-start w-full mb-2">
          <Link to="/" onClick={toggleMenu} className="flex items-center">
            <i className="bi bi-house text-l md:text-2xl"></i>
            <p
              className={`ml-2 text-xs md:text-lg transition-opacity duration-500 ease-in-out ${isExpanded ? 'opacity-100 delay-100' : 'opacity-0'}`}
            >
              Início
            </p>
          </Link>
        </li>
        <li className="flex items-center justify-start w-full mb-2">
          <Link to="/sobre" onClick={toggleMenu} className="flex items-center">
            <i className="bi bi-person-vcard text-l md:text-2xl"></i>
            <p
              className={`ml-2 text-xs md:text-lg transition-opacity duration-500 ease-in-out ${isExpanded ? 'opacity-100 delay-200' : 'opacity-0'}`}
            >
              Sobre
            </p>
          </Link>
        </li>
        <li className="flex items-center justify-start w-full mb-2">
          <Link to="/contato" onClick={toggleMenu} className="flex items-center">
            <i className="bi bi-person fs-4 text-l md:text-2xl"></i>
            <p
              className={`ml-2 text-xs md:text-lg transition-opacity duration-500 ease-in-out ${isExpanded ? 'opacity-100 delay-300' : 'opacity-0'}`}
            >
              Contato
            </p>
          </Link>
        </li>
        <li className="flex items-center justify-start w-full mb-2">
          <Link to="/links" onClick={toggleMenu} className="flex items-center">
            <i className="bi bi-book fs-4 text-l md:text-2xl"></i>
            <p
              className={`ml-2 text-xs md:text-lg transition-opacity duration-500 ease-in-out ${isExpanded ? 'opacity-100 delay-400' : 'opacity-0'}`}
            >
              Links
            </p>
          </Link>
        </li>
        <li className="flex items-center justify-start w-full mb-2">
          <Link to="/projetos" onClick={toggleMenu} className="flex items-center">
            <i className="bi bi-code-slash text-l md:text-2xl"></i>
            <p
              className={`ml-2 text-xs md:text-lg transition-opacity duration-500 ease-in-out ${isExpanded ? 'opacity-100 delay-500' : 'opacity-0'}`}
            >
              Projetos
            </p>
          </Link>
        </li>
        <li className="flex items-center justify-start w-full mb-2">
          <Link to="/apps" onClick={toggleMenu} className="flex items-center">
            <i className="bi bi-send-arrow-down-fill text-l md:text-2xl"></i>
            <p
              className={`ml-2 text-xs md:text-lg transition-opacity duration-500 ease-in-out ${isExpanded ? 'opacity-100 delay-600' : 'opacity-0'}`}
            >
              Aplicativos
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import { LayoutProps } from '../Interfaces/LayoutProps';

const Layout: React.FC<LayoutProps> = ({ isExpanded, toggleMenu }) => {
  return (
    <div className="flex">
      <Menu isExpanded={isExpanded} toggleMenu={toggleMenu} />
      <div
        className={`ml-0 md:transition-all duration-300 ease-in-out ml-[${isExpanded ? '5vw' : '4vw'}]  w-full`} 
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

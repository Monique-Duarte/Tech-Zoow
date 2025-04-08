import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import { LayoutProps } from '../Interfaces/LayoutProps';  // Certifique-se de que a interface LayoutProps está sendo importada corretamente

const Layout: React.FC<LayoutProps> = ({ isExpanded, toggleMenu }) => {
  return (
    <div className="flex">
      <Menu isExpanded={isExpanded} toggleMenu={toggleMenu} />
      <div
        className={`transition-all duration-300 ease-in-out ml-[${isExpanded ? '0vw' : '0vw'}] w-full`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

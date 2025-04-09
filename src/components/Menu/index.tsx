import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
  const { pathname } = location;

  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Links', path: '/uteis' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="z-[999] fixed left-1/2 transform -translate-x-1/2 backdrop-blur bg-white/30 border border-white/30 rounded-3xl ring-1 ring-white/10 shadow-md text-black p-2 justify-center">
      <ul className="flex max-w-[95vw]">
        {menuItems.map(({ name, path }) => {
          const isActive = pathname === path;
          return (
            <li key={name} className="items-center mb-2">
              <Link
                to={path}
                className={`flex items-center md:mr-5 px-2 py-1 transition-all duration-200 ${isActive
                    ? 'bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl'
                    : 'hover:bg-white/20 hover:rounded-md rounded-md'
                  }`}
              >
                <p className="text-sm md:text-lg">{name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;

import ListaServicos from "../components/Servicos/ListaServicos";
import TituloSecaoServicos from "../components/Sobre/TituloSecao";



const Servicos = () => {
  return (
    <div className="md:py-12 py-5 px-4 w-full bg-[#f3f3f3] rounded-sm">
      <div className="max-w-[80vw] mx-auto">
        <TituloSecaoServicos titulo="Lista de serviços" />
        <ListaServicos />
      </div>
    </div>
  );
};

export default Servicos;

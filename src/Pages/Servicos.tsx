import ListaServicos from "../components/Servicos/ListaServicos";
import TituloSecaoServicos from "../components/Sobre/TituloSecao";



const Servicos = () => {
  return (
    <div className="p-5 w-full bg-[#f3f3f3] rounded-sm">
      <div className="max-w-[80vw] mx-auto">
        <TituloSecaoServicos titulo="Lista de serviços" />
        <ListaServicos />
      </div>
    </div>
  );
};

export default Servicos;

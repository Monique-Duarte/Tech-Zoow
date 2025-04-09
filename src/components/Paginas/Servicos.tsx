import ListaServicos from "../Servicos/ListaServicos";
import TituloSecao from "../Servicos/TituloSecao";


const Servicos = () => {
  return (
    <div className="p-5 w-full bg-[#f3f3f3] rounded-sm mb-10">
      <div className="max-w-[80vw] mx-auto">
        <TituloSecao titulo="Lista de serviços" />
        <ListaServicos />
      </div>
    </div>
  );
};

export default Servicos;

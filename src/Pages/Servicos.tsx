import ListaServicos from "../components/Servicos/ListaServicos";
import TituloSecaoServicos from "../components/Sobre/TituloSecao";
import Fabrica from "../assets/Fabrica.jpeg";



const Servicos = () => {
  return (
    <div className="md:py-12 py-5 px-4 w-full bg-[#f3f3f3] rounded-sm">
      <div className="max-w-[80vw] mx-auto">
        <TituloSecaoServicos titulo="Lista de serviços" />
        <ListaServicos />
        <img className="w-[100vw] md:h-[50vh] h-[40vw] mt-2 object-cover" src={Fabrica}/>
      </div>
    </div>
  );
};

export default Servicos;

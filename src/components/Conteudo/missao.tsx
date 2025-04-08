import { MissaoProps } from "../Interfaces/MissaoProps";

const Missao: React.FC<MissaoProps> = ({ isExpanded }) => {
  return (
    <div id="Missao" className= 'h-[100vh] block max-w-[80vw] mx-auto md:justify-center text-justify md:py-12 py-5 px-4 bg-[#b1acac]'>
      <h1 className="text-lg font-bold md:text-2xl mb-2 relative overflow-y-hidden">Missão </h1>
      <h2 className="p-1">
        Oferecer soluções em serviços que possam desenvolver e valorizar os animais, as pessoas e as empresas comprometidas em todo o sistema, através do uso de tecnologia avançada e apropriada, buscando o melhor resultado econômico e/ou zootécnico da empresa e dos seus clientes.
      </h2>
      <br></br>
      <h1 className="text-lg font-bold md:text-2xl mb-2 relative overflow-y-hidden">Visão </h1>
      <h2>
        Ser reconhecida como empresa competente e ágil, que entrega resultados acima das expectativas dos seus clientes.
      </h2>
      <br></br>
      <h1 className="text-lg font-bold md:text-2xl mb-2 relative overflow-y-hidden">Valores </h1>
      <h2>
        Ética, agilidade, eficiência e humildade, sempre otimizando os recursos naturais e preservando o meio ambiente e a cultura de cada local.
      </h2>
    </div>
  );
};

export default Missao;
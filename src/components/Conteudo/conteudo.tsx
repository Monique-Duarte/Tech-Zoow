import Missao from "./missao";
import Sobre from "./Sobre";

interface ConteudoProps {
  isExpanded: boolean;
}

const Conteudo = ({ isExpanded }: ConteudoProps) => {
  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isExpanded ? "ml-[30vw]" : "ml-[15vw]"
      }`}
    >
      <Sobre />
      <Missao />
    </div>
  );
};

export default Conteudo;

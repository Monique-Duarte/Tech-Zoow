import ConteudoProps from "../Interfaces/ConteudoProps";
import Missao from "./missao";
import Sobre from "./Sobre";

const Conteudo = ({ isExpanded }: ConteudoProps) => {
  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isExpanded ? "ml-[0vw]" : "ml-[0vw]"
      }`}
    >
      <Sobre isExpanded={isExpanded} />
      <Missao />
    </div>
  );
};

export default Conteudo;

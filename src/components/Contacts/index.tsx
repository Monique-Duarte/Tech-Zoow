import ContatoProps from "../Interfaces/ContatoProps";
import RedesSociais from "./redesSocias";

const Contato: React.FC<ContatoProps> = ({ isExpanded }) => {
  return (
    <RedesSociais isExpanded={isExpanded} />
  );
};

export default Contato;

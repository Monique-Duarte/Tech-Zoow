import ContatoProps from "../Interfaces/ContatoProps";
import FaleConosco from "./faleConosco";


const Contato: React.FC<ContatoProps> = ({ isExpanded }) => {
  return (
    <div className="bg-[#b1acac] w-[80vw] mx-auto h-[90vh]">
      <FaleConosco isExpanded={isExpanded} />
    </div>
  );
};

export default Contato;

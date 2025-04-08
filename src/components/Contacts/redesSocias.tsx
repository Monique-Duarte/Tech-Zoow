import ContatoProps from "../Interfaces/ContatoProps";
import ContactIcon from "./contactIcon";

const RedesSociais: React.FC<ContatoProps> = ({ isExpanded }) => {
  return (
    <div className={`flex max-w-[80vw] md:mx-auto md:justify-center text-justify md:py-12 py-5 px-4 bg-[#b1acac] transition-all duration-300 ease-in-out ${isExpanded ? 'ml-[30vw]' : 'ml-[15vw]'}`}>
      <ContactIcon 
        href="https://www.instagram.com/henriquecostafoh/"
        iconClass="bi bi-instagram"
        label="Instagram"
      />
      <ContactIcon 
        href="mailto:henrique_costa@techzoow.com.br"
        iconClass="bi bi-envelope"
        label="Email"
      />
      <ContactIcon 
        href="https://www.linkedin.com/company/techzoow-consultoria-agropecu-ria-ltda/posts/?feedView=all"
        iconClass="bi bi-linkedin"
        label="LinkedIn"
      />
      <ContactIcon 
        href="https://wa.me/19996072672"
        iconClass="bi bi-whatsapp"
        label="WhatsApp"
      />
    </div>
  );
};

export default RedesSociais;

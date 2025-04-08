import ContatoProps from "../Interfaces/ContatoProps";
import ContactIcon from "./contactIcon";

const RedesSociais: React.FC<ContatoProps> = ({ isExpanded }) => {
  return (
    <div className= 'flex max-w-[80vw] text-justify'>
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

import ContactIcon from "./contactIcon";


const Contact = () => {
  return (
    <div className="flex center mx-2 my-0 md:items-center items-center justify-center">
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

export default Contact;

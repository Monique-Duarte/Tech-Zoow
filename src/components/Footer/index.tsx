import FaleConosco from "../Contacts/faleConosco";

const Footer = () => {
  return (
    <footer className="text-white text-center w-full mx-auto bg-[#005b8f] p-3">
    <div className="md:flex md:py-1 py-1 px-4 rounded-sm w-[100vw] h-[100%]">
      <div className="max-w-[80vw]">
      <FaleConosco />
      </div>
    </div>
      © 2025 Todos os direitos reservados.
    </footer>
  );
};

export default Footer;
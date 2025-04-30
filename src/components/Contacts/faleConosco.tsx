import RedesSociais from "./redesSocias";

const FaleConosco = () => {
  return (
    <div className="w-[80vw] md:flex justify-around md:py-2">
      <div className="md:flex text-justify items-start gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold my-4">Contatos:</h2>
          <RedesSociais />
          <p className="mb-2">Telefone: +55 (19) 99114-4408</p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold my-4">Nosso endereço:</h2>
          <p>Rua João Batista de Souza, 77 B</p>
          <p>Bairro Jardim Nova Prata</p>
          <p style={{ wordSpacing: "0.5rem" }}> Águas da Prata - SP, CEP: 13890-000 </p>
        </div>
        <div className="flex-1">
          <iframe
            className="my-4 md:my-0 w-full md:w-[40vw] h-[20vh] md:h-[20vh] rounded shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14802.970705715126!2d-46.725459303460774!3d-21.944441775971654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9ced33a696d59%3A0x6912669867b1d137!2s%C3%81guas%20da%20Prata!5e0!3m2!1spt-BR!2sbr!4v1744119555751!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;

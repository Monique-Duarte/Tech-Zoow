import RedesSociais from "./redesSocias"


const FaleConosco = () => {
  return (
    <div className="w-[80vw] mx-auto ">
      <div className="md:flex overflow-hidden rounded-lg content">
        <h2 className=" mb-5 md:items-center content-center">
          <h3 className="text-left text-lg md:text-2xl font-bold py-5 text-[#036016]">Fale Conosco</h3>
          <h3>Contatos:</h3>
          <RedesSociais />
          Telefone: +55 (19) 99114-4408
          <br></br>
          <br></br>
          <h3>Endereço físico: </h3>
          Rua João Batista de Souza, 77 B, <br></br>
          Bairro Jardim  Nova Prata, <br></br>
          Aguas da Prata - SP <br></br>
          CEP: 13890-000
        </h2>
        <iframe className="my-5 md:my-15 w-[80vw] mx-auto h-[30vh] md:h-[60vh] md:w-[50vw]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14802.970705715126!2d-46.725459303460774!3d-21.944441775971654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9ced33a696d59%3A0x6912669867b1d137!2s%C3%81guas%20da%20Prata!5e0!3m2!1spt-BR!2sbr!4v1744119555751!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

  )
}

export default FaleConosco
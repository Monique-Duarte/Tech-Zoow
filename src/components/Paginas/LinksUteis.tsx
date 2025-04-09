import Lattes from "../../assets/lattes.png";

const Uteis = () => {
  return (
    <div className="min-h-[100vh] mb-10 block max-w-[100vw] text-justify md:py-12 py-5 px-4 bg-[#f3f3f3]">
      <div className="max-w-[80vw] mx-auto">
        <h1 className="text-lg md:text-2xl font-bold mb-5 text-[#036016]">
          Links úteis
        </h1>
        <div className="mb-6">
          <h3 className="text-lg md:text-l mb-2 text-[#036016]">Entrevista ao programa Ourofino em Campo em 02/02/2016</h3>
          <iframe className="md:w-[560px] md:h-[315px] " src="https://www.youtube.com/embed/9q_AAGejKqc?si=X_mD2A3uVSN6NHol" 
          title="Em Discussão: uso de ração na dieta do gado" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe> 
          <a className='inline-block' href="http://lattes.cnpq.br/0223667659341794"  target="_blank" rel="noopener noreferrer">
            <img className='md:w-[20vw] w-[50vw] my-5' src={Lattes} alt="Acesse o curriculo Lattes" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Uteis;

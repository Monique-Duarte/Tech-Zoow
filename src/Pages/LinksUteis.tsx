import Lattes from "../../src/assets/lattes.png";
import Milkpoint from "../../src/assets/milkpoint.png";
import Farmnews from "../../src/assets/farmnews.png";
import Brcorte from "../../src/assets/brCorte.png";
import Cqbal from "../../src/assets/cqbal.png";
import Embrapa from "../../src/assets/embrapa.png";
import Optimal from "../../src/assets/optimal.png";

const Uteis = () => {
  return (
    <div className="min-h-[100vh] block max-w-[100vw] text-justify md:py-12 py-5 px-4 bg-[#f3f3f3]">
      <div className="max-w-[80vw] mx-auto">
        <h1 className="text-lg md:text-2xl font-bold mb-5 text-[#036016]">
          Links úteis
        </h1>
        <div className="md:flex mb-6">
          <div className="block mx-2">
          <h3 className="text-lg md:text-l mb-2 text-[#036016]">Entrevista ao programa Ourofino em Campo em 02/02/2016</h3>
          <iframe className="md:w-[660px] md:h-[315px] mr-2" src="https://www.youtube.com/embed/9q_AAGejKqc?si=X_mD2A3uVSN6NHol" 
          title="Em Discussão: uso de ração na dieta do gado" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe> 
          </div>
          <div className="md:w-[50vw]">
          <a className='inline-block' href="https://www.milkpoint.com.br/"  target="_blank" rel="noopener noreferrer">
            <img className='md:w-[10vw] w-[20vw] my-5' src={Milkpoint} alt="Acesse oo site oficial" />
          </a>
          <a className='inline-block mx-2' href="https://brcorte.com.br/site/"  target="_blank" rel="noopener noreferrer">
            <img className='md:w-[10vw] w-[20vw] my-5' src={Brcorte} alt="Acesse oo site oficial" />
          </a>
          <a className='inline-block' href="https://optimal.com.br/pt/"  target="_blank" rel="noopener noreferrer">
            <img className='md:w-[20vw] w-[20vw] my-5' src={Optimal} alt="Acesse oo site oficial" />
          </a>
          <a className='inline-block' href="https://www.embrapa.br/gado-de-leite"  target="_blank" rel="noopener noreferrer">
            <img className='md:w-[20vw] w-[20vw] my-5' src={Embrapa} alt="Acesse oo site oficial" />
          </a>
          <a className='inline-block mx-2' href="https://www.farmnews.com.br/"  target="_blank" rel="noopener noreferrer">
            <img className='md:w-[20vw] w-[20vw] my-5' src={Farmnews} alt="Acesse oo site oficial" />
          </a>
          <a className='inline-block' href="https://cqbal.com.br/#!/"  target="_blank" rel="noopener noreferrer">
            <img className='md:w-[20vw] w-[20vw] my-5' src={Cqbal} alt="Acesse oo site oficial" />
          </a>
          <a className='inline-block' href="http://lattes.cnpq.br/0223667659341794"  target="_blank" rel="noopener noreferrer">
            <img className='md:w-[20vw] w-[50vw] my-5' src={Lattes} alt="Acesse o curriculo Lattes" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uteis;

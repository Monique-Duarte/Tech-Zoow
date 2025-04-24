import sustennutri from '../../src/assets/sustennutri.png';
import purinutre from '../../src/assets/purinutre.png';
import yes from '../../src/assets/yes.png';
import qualy from '../../src/assets/Qualy.png';
import aurora from '../../src/assets/aurora.png';
import allnova from '../../src/assets/allnova.png';
import nutrane from '../../src/assets/nutrane.png';
import dsm from '../../src/assets/dsm.png';
import icc from '../../src/assets/ICC.png';

const Projetos = () => {
  return (
    <div className='h-[100%] md:py-12 py-5 px-4 w-[100vw] bg-[#ffffff] rounded-sm'>
      <div className="max-w-[80vw] mx-auto">
        <h1 className='text-lg md:text-2xl font-bold mb-5 relative overflow-y-hidden text-[#036016]'>Lista de Projetos</h1>
        <ul className='block text-justify list-disc px-5'>
          <li>
            <h2 className="md:text-xl">Sustennutri Nutrição Animal — Porto Velho/RO</h2>
            <h4>Formulação, desenvolvimento de produtos e treinamento da equipe técnica-comercial da start-up do Grupo Rovema na área de nutrição animal.</h4>
            <a className='inline-block' href="https://sustennutri.com.br/" target="_blank" rel="noopener noreferrer">
              <img className='h-[60px]' src={sustennutri} alt="Sustennutri" />
            </a>
          </li>
          <br></br>
          <li>
            <h2 className="md:text-xl">Grupo SCM/ Purinutre — Maranhão</h2>
            <h4>Formulação, desenvolvimento de produtos e treinamento da equipe técnica-comercial da fábrica de nutrição animal do Grupo SCM/ Purinutre, com 8 lojas.</h4>
            <a className='inline-block' href="http://purinutre.com.br/Index.aspx" target="_blank" rel="noopener noreferrer">
              <img className='h-[60px]' src={purinutre} alt="Purinutre" />
            </a>
          </li>
          <br></br>
          <li>
            <h2 className="md:text-xl">Yes — Campinas/SP</h2>
            <h4>Suporte técnico à linha de produtos para ruminantes e fábricas de ração da Yes, empresa de biotecnologia em nutrição animal, que desenvolve aditivos nutricionais como adsorventes de micotoxinas, prebióticos e minerais orgânicos.</h4>
            <a className='inline-block' href="https://yessinergy.com/" target="_blank" rel="noopener noreferrer">
              <img className='max-h-[60px]' src={yes} alt="yes sinergy" />
            </a>
          </li>
          <br></br>
          <li>
            <h2 className="md:text-xl">Qualy Nutrição Animal — Lindoia/SP</h2>
            <h4>Formulação e desenvolvimento de novos produtos para todas as espécies animais, suporte à Garantia da Qualidade e Laboratório.</h4>
            <a className='inline-block' href="https://www.qualynutricaoanimal.com.br/" target="_blank" rel="noopener noreferrer">
              <img className='max-h-[60px]' src={qualy} alt="Qualy" />
            </a>
          </li>
          <br></br>
          <li>
            <h2 className="md:text-xl">Cooperativa Aurora — Chapecó/SC</h2>
            <a className='inline-block' href="https://www.auroraalimentos.com.br/" target="_blank" rel="noopener noreferrer">
              <img className='max-h-[60px]' src={aurora} alt="Aurora" />
            </a>
          </li>
          <br></br>
          <li>
            <h2 className="md:text-xl">AllNova/ H.J. Baker — Bauru/SP</h2>
            <a className='inline-block' href="https://www.allnova.com.br/" target="_blank" rel="noopener noreferrer">
              <img className='max-h-[60px]' src={allnova} alt="allnova" />
            </a>
          </li>
          <br></br>
          <li>
            <h2 className="md:text-xl">Grupo Nutrane - Pernambuco/Bahia</h2>
            <h4>Direção técnica do grupo, com responsabilidade nos departamentos de formulação, garantia da qualidade, laboratório e compra de microingredientes, além do desenvolvimento de novos produtos, para todas as espécies animais com rações produzidas pelo grupo (marcas DuRancho, Irca e Pratigi).</h4>
            <a className='inline-block' href="https://www.nutrane.com.br/" target="_blank" rel="noopener noreferrer">
              <img className='max-h-[60px]' src={nutrane} alt="Nutrane" />
            </a>
          </li>
          <br></br>
          <li>
            <h2 className="md:text-xl">DSM Produtos Nutricionais — São Paulo/SP</h2>
            <h4>Desenvolvimento de linha de produtos para o mercado de ruminantes, treinamento da equipe técnica-comercial e desenvolvimento de canais de distribuição.</h4>
            <a className='inline-block' href="https://www.dsm-firmenich.com/anh/home.html" target="_blank" rel="noopener noreferrer">
              <img className='max-h-[60px]' src={dsm} alt="DSM" />
            </a>
          </li>
          <br></br>
          <li>
            <h2 className="md:text-xl">ICC Brazil — São Paulo/SP</h2>
            <a className='inline-block' href="https://www.iccbrazil.com/" target="_blank" rel="noopener noreferrer">
              <img className='max-h-[60px]' src={icc} alt="ICC" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Projetos;

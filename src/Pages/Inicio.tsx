import foto from '../assets/1516791456605.jpg';
import Imagem from '../assets/imagem.png';

const Inicio = () => {
  return (
    <div id="Home" className=' h-full w-[100vw] md:py-12 py-5 px-4 block md:flex md:justify-center text-justify bg-[#ffffff]'>
      <div className="md:w-[80vw] w-[80vw] mx-auto block">
        <h1 className="text-lg md:text-3xl font-bold mb-5 relative overflow-y-hidden text-[#036016]">Início</h1>
        <h2 className="md:text-xl">
          Fundada em julho de 2010 pelo zootecnista Henrique Costa Filho, MSc em Nutrição e Produção Animal pela FMVZ/USP, a TechZoow é uma consultoria independente especializada
          em nutrição animal e Pet Food. Desde sua criação, a empresa tem se dedicado a oferecer soluções inovadoras e eficazes para empresas do setor, buscando sempre a excelência
          em seus serviços.
        </h2>
        <h2 className='md:text-xl mt-5'>
          A TechZoow se destaca por sua capacidade de identificar oportunidades de melhoria e implementar estratégias que promovem o crescimento e a eficiência dos negócios de
          seus clientes. Com uma abordagem centrada nas necessidades do cliente, a empresa oferece consultoria em áreas como:
        </h2>
        <div className='flex flex-col md:flex-row justify-center items-center mt-5'>
        <img src={Imagem}/>
        {/* <h4 className="my-2 mx-5">Desenvolvimento de Produtos.</h4>
        <h4 className="my-2 mx-5">Estratégias de Vendas.</h4>
        <h4 className="my-2 mx-5">Business Intelligence.</h4>
        <h4 className="my-2 mx-5">Treinamento e Capacitação.</h4> */}
        <div className='block justify-center center mx-auto'>
          <img  className="m-auto w-50 h-50 md:w-80 md:h-80 rounded-full object-cover" src={foto}/>
          <p className='md:text-lg  text-center my-2'>Henrique Costa Filho</p>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Inicio;

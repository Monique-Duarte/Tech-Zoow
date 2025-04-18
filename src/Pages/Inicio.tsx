import foto from '../assets/1516791456605.jpg';

const Inicio = () => {
  return (
    <div id="Home" className='h-[100vh] md:py-12 py-5 px-4 md:flex max-w-[100vw] md:justify-center text-justify bg-[#f3f3f3]'>
      <div className="max-w-[70vw] mx-auto block">
        <h1 className="text-lg md:text-2xl font-bold mb-5 relative overflow-y-hidden text-[#036016]">Início</h1>
        <h2 className="md:px-10">
          Fundada em julho de 2010 pelo zootecnista Henrique Costa Filho, MSc em Nutrição e Produção Animal pela FMVZ/USP, a TechZoow é uma consultoria independente especializada
          em nutrição animal e Pet Food. Desde sua criação, a empresa tem se dedicado a oferecer soluções inovadoras e eficazes para empresas do setor, buscando sempre a excelência
          em seus serviços.
        </h2>
        <br></br>
        <h2 className="md:px-10">
          A TechZoow se destaca por sua capacidade de identificar oportunidades de melhoria e implementar estratégias que promovem o crescimento e a eficiência dos negócios de
          seus clientes. Com uma abordagem centrada nas necessidades do cliente, a empresa oferece consultoria em áreas como:
        </h2>
        <h4 className="md:px-15 my-2 mx-5">Desenvolvimento de Produtos.</h4>
        <h4 className="md:px-15 my-2 mx-5">Estratégias de Vendas.</h4>
        <h4 className="md:px-15 my-2 mx-5">Business Intelligence.</h4>
        <h4 className="md:px-15 my-2 mx-5">Treinamento e Capacitação.</h4>
      </div>
      <div className='block center mx-auto'>
        <img  className="m-auto w-50 h-50 md:w-80 md:h-80 rounded-full object-cover" src={foto}/>
        <p className='md:text-lg px-15 mx-8 my-2'>Henrique Costa Filho</p>
      </div>
    </div>
  );
};

export default Inicio;

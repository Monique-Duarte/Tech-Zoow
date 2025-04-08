// Inicio.tsx
import { InicioProps } from '../Interfaces/InicioProps';  // Certifique-se de importar a interface corretamente

const Inicio: React.FC<InicioProps> = ({ isExpanded }) => {
  return (
    <div
      id="Home"
      className='h-[100%] mb-10 block max-w-[80vw] mx-auto md:justify-center text-justify md:py-12 py-5 px-4 bg-[#b1acac]'>
      <h1 className="text-lg md:text-2xl font-bold mb-5 relative overflow-y-hidden">Início</h1>
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
  );
};

export default Inicio;

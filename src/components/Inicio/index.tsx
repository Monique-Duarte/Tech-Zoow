// Inicio.tsx
import { InicioProps } from '../Interfaces/InicioProps';  // Certifique-se de importar a interface corretamente

const Inicio: React.FC<InicioProps> = ({ isExpanded }) => {
  return (
    <div
      id="Home"
      className={`block max-w-[80vw] md:mx-auto md:justify-center text-justify mb-5 md:py-12 py-5 px-4 bg-[#b1acac] transition-all duration-300 ease-in-out ${isExpanded ? 'ml-[30vw]' : 'ml-[15vw]'}`}
    >
      <h1 className="text-2xl mb-5 relative overflow-y-hidden">Início</h1>
      <h2 className="p-1">
        Fundada em julho/2010 pelo zootecnista Henrique Costa Filho, MSc Nutrição e Produção Animal — FMVZ/USP, a TechZoow,
        é uma consultoria independente, trabalhando com empresas de nutrição animal e Pet Food. O foco da consultoria é na nutrição animal,
        treinamento de pessoas, e modelos de vendas e distribuição de produtos para empresas.
      </h2>
      <br></br>
      <h2>
        A experiência técnica-comercial de mais de 22 anos do proprietário em grandes empresas do setor de nutrição animal do Brasil
        (Purina, Cargill Fertilizantes – hoje Mosaic, Guabi, Grupo Rancho Alegre e Allnova/H.J. Baker), credenciam a TechZoow a prestar
        consultoria em diversas áreas, aceitando qualquer desafio desse segmento de mercado.
      </h2>
    </div>
  );
};

export default Inicio;

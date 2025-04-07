import { useState } from "react";

const Inicio = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="SobreMim" className="block mx-auto justify-center text-justify py-12 px-4 max-w-[80vw] font-winky bg-[#b1acac]">
      <div
        id="SobreMim"
        className={`transition-all duration-300 ease-in-out ${isExpanded ? "ml-[30vw]" : "ml-[15vw]"
          }`}
      ></div>
      <h1 className="text-2xl mb-5 relative overflow-y-hidden">Início
      </h1>
      <h2 className="p-1 ">
        Fundada em julho/2010 pelo zootecnista Henrique Costa Filho, MSc Nutrição e Produção Animal — FMVZ/USP, a TechZoow,
        é uma consultoria independente, trabalhando com empresas de nutrição animal e Pet Food. O foco da consultoria é na
        nutrição animal, treinamento de pessoas, e modelos de vendas e distribuição de produtos para empresas.
        A experiência técnica-comercial de mais de 22 anos do proprietário em grandes empresas do setor de nutrição animal do Brasil
        (Purina, Cargill Fertilizantes – hoje Mosaic, Guabi, Grupo Rancho Alegre e Allnova/H.J. Baker), credenciam a TechZoow a prestar consultoria em diversas áreas, aceitando qualquer desafio desse segmento de mercado.
      </h2>
    </div>
  );
};

export default Inicio;
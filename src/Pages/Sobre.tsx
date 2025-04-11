import TituloSecao from "../components/Servicos/TituloSecaoServiços";
import BlocoTexto from "../components/Sobre/BlocoTexto";


const Sobre = () => {
  return (
    <div
      id="Sobre"
      className="h-full block max-w-[100vw] text-justify md:py-12 py-5 px-4 bg-[#f3f3f3] rounded-sm"
    >
      <div className="max-w-[80vw] mx-auto space-y-6">
        <TituloSecao titulo="Sobre a empresa" />
        <BlocoTexto>
          O foco da consultoria é na nutrição animal, treinamento de pessoas, e
          modelos de vendas e distribuição de produtos para empresas.
        </BlocoTexto>
        <BlocoTexto>
          A experiência técnica-comercial de mais de 22 anos do proprietário em
          grandes empresas do setor de nutrição animal do Brasil (Purina,
          Cargill Fertilizantes – hoje Mosaic, Guabi, Grupo Rancho Alegre e
          Allnova/H.J. Baker), credenciam a TechZoow a prestar consultoria em
          diversas áreas, aceitando qualquer desafio desse segmento de mercado.
        </BlocoTexto>

        <TituloSecao titulo="Missão" />
        <BlocoTexto>
          Oferecer soluções em serviços que possam desenvolver e valorizar os
          animais, as pessoas e as empresas comprometidas em todo o sistema,
          através do uso de tecnologia avançada e apropriada, buscando o melhor
          resultado econômico e/ou zootécnico da empresa e dos seus clientes.
        </BlocoTexto>

        <TituloSecao titulo="Visão" />
        <BlocoTexto>
          Ser reconhecida como empresa competente e ágil, que entrega resultados
          acima das expectativas dos seus clientes.
        </BlocoTexto>

        <TituloSecao titulo="Valores" />
        <BlocoTexto>
          Ética, agilidade, eficiência e humildade, sempre otimizando os
          recursos naturais e preservando o meio ambiente e a cultura de cada
          local.
        </BlocoTexto>
      </div>
    </div>
  );
};

export default Sobre;

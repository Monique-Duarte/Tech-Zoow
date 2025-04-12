import VideoSection from "../components/Uteis/VideoSection";
import PlanilhaLink from "../components/Uteis/PlanilhaLink";
import ParceiroLogo from "../components/Uteis/ParceiroLogo";
// import Lattes from "../assets/lattes.png";
import Milkpoint from "../assets/milkpoint.png";
import Farmnews from "../assets/farmnews.png";
import Brcorte from "../assets/brCorte.png";
import Cqbal from "../assets/cqbal.png";
import Embrapa from "../assets/embrapa.png";
import Optimal from "../assets/optimal.png";
import InstagramPost from "../components/Uteis/InstagramPost";

const Uteis = () => {
  return (
    <div className="min-h-[100vh] mx-auto block max-w-[100vw] md:py-12 py-5 bg-[#f3f3f3]">
      <div className="max-w-[95vw] mx-auto">
        <h1 className="text-lg md:text-2xl font-bold mb-5 text-[#036016]">
          Links úteis
        </h1>
        <div className="md:flex mb-6">
          <div className="block w-[90vw]">
            <VideoSection />
            {/* Centralizando as planilhas */}
              <h1 className="md:w-[50vw] mx-auto text-lg md:text-2xl font-bold py-5 text-[#036016]">
                Planilhas:
              </h1>
            <div 
            className="flex flex-wrap justify-items-normal md:w-[70vw] mx-auto backdrop-blur
          bg-white/30 border border-white/30 rounded-3xl ring-1 ring-white/10 shadow-md">
              <PlanilhaLink
                title="Cálculo de GPD"
                href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEmk1TXyho7tMb6y-y?..."
              />
              <PlanilhaLink
                title="Conversor de Energia"
                href="https://onedrive.live.com/personal/c432ca1df45aaa76/_layouts/15/Doc.aspx?sourcedoc=..."
              />
              <PlanilhaLink
                title="Rendimento Carcaça"
                href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEmlYdgcdW9KYqv-sL?..."
              />
              <PlanilhaLink
                title="Ponto Equilíbrio Alimentação"
                href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEgaV7q5umdmFS4IXh4g?..."
              />
              <PlanilhaLink
                title="Balanço Cátion-Ânion"
                href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEmlmSKzbR42Wta_kA?..."
              />
              <PlanilhaLink
                title="Custo Suplementação nas Secas"
                href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEmkoYmq3XBvwLFXH5?..."
              />
              <PlanilhaLink
                title="Custo de Produção—Silagem Milho"
                href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEmlNUGuvLInrlcPlm?..."
              />
            </div>
            <div>
              <h2 className="md:w-[80vw] mx-auto text-lg md:text-2xl font-bold mt-10 text-[#036016]">
                Publicações:
              </h2>
              <InstagramPost />
            </div>
          </div>
          <div className="md:flex-wrap md:w-[20vw]">
            <ParceiroLogo href="https://www.milkpoint.com.br/" src={Milkpoint} />
            <ParceiroLogo href="https://brcorte.com.br/site/" src={Brcorte} />
            <ParceiroLogo href="https://optimal.com.br/pt/" src={Optimal} />
            <ParceiroLogo
              href="https://www.embrapa.br/gado-de-leite"
              src={Embrapa}
            />
            <ParceiroLogo href="https://www.farmnews.com.br/" src={Farmnews} />
            <ParceiroLogo href="https://cqbal.com.br/#!" src={Cqbal} />
            {/* <ParceiroLogo href="http://lattes.cnpq.br/0223667659341794" src={Lattes} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uteis;

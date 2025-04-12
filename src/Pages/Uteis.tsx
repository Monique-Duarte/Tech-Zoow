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
import InstagramPosts from "../components/Uteis/Instagram";

const Uteis = () => {
  return (
    <div className="min-h-[100vh] mx-auto block max-w-[100vw] md:py-12 py-5 bg-[#f3f3f3]">
      <div className="max-w-[95vw] mx-auto">
        <h1 className="text-lg md:text-2xl font-bold mb-5 text-[#036016]">
          Links úteis
        </h1>
        <div className="md:flex mb-6">
          <div className="block md:w-[80vw] w-[90vw]">
            <VideoSection />
            <div className="mt-5 inline-grid pr-2">
              <h1 className="text-lg md:text-2xl font-bold mb-5 text-[#036016]">Planilhas:</h1>
              <PlanilhaLink title="Cálculo de GPD" href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEmk1TXyho7tMb6y-y?..." />
              <PlanilhaLink title="Conversor de Energia" href="https://onedrive.live.com/personal/c432ca1df45aaa76/_layouts/15/Doc.aspx?sourcedoc=..." />
              <PlanilhaLink title="Cálculo de Rendimento Carcaça" href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEmlYdgcdW9KYqv-sL?..." />
              <PlanilhaLink title="Cálculo Ponto Equilíbrio Alimentação" href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEgaV7q5umdmFS4IXh4g?..." />
              <PlanilhaLink title="Cálculo Balanço Cátion-Ânion" href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEmlmSKzbR42Wta_kA?..." />
              <PlanilhaLink title="Cálculo Custo Suplementação nas Secas" href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEmkoYmq3XBvwLFXH5?..." />
              <PlanilhaLink title="Cálculo Custo de Produção—Silagem Milho" href="https://onedrive.live.com/:x:/g/personal/C432CA1DF45AAA76/s!AnaqWvQdyjLEmlNUGuvLInrlcPlm?..." />
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-bold pt-3 text-[#036016]">Publicações:</h2>
              <InstagramPosts />
            </div>
          </div>
          <div className="md:flex-wrap md:w-[20vw]">
            <ParceiroLogo href="https://www.milkpoint.com.br/" src={Milkpoint} />
            <ParceiroLogo href="https://brcorte.com.br/site/" src={Brcorte} />
            <ParceiroLogo href="https://optimal.com.br/pt/" src={Optimal} />
            <ParceiroLogo href="https://www.embrapa.br/gado-de-leite" src={Embrapa} />
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

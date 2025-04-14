import { useLocation } from "react-router-dom";
// import cerealGrains from "../../assets/cerealGrains.jpg";
// import pellet from "../../assets/pellet.jpg";
// // import racaoColorida from "../../assets/racao.png";
// // import Racao from "../../assets/racao.jpg";
import industria from "../../assets/industria.jpg";
import Test from "../../assets/test.jpg"
import Pellets from "../../assets/pellets.jpg"
import Racao2 from "../../assets/racao2.png"
import Racao from "../../assets/racao.png"


const bannerItens = [
  { img: Pellets, path: "/" },
  { img: Racao, path: "/sobre" },
  { img: industria, path: "/servicos" },
  { img: industria, path: "/projetos" },
  { img: Test, path: "/uteis" },
  { img: Racao2, path: "/contato" },
];

const Banner = () => {
  const location = useLocation();
  const bannerAtual = bannerItens.find((item) => item.path === location.pathname);
  const imagemBanner = bannerAtual ? bannerAtual.img : Pellets; 

  return (
    <div>
      <img
        className="w-[100vw] md:h-[40vh] h-[30vw] object-cover"
        src={imagemBanner}
        alt="Banner"
      />
    </div>
  );
};

export default Banner;

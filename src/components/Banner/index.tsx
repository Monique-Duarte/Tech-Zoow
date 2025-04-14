import { useLocation } from "react-router-dom";
import cerealGrains from "../../assets/cerealGrains.jpg";
import pellet from "../../assets/pellet.jpg";
import racaoColorida from "../../assets/racao.png";
import industria from "../../assets/industria.jpg";
import Racao from "../../assets/racao.jpg";

const bannerItens = [
  { img: Racao, path: "/" },
  { img: pellet, path: "/sobre" },
  { img: industria, path: "/servicos" },
  { img: industria, path: "/projetos" },
  { img: racaoColorida, path: "/uteis" },
  { img: cerealGrains, path: "/contato" },
];

const Banner = () => {
  const location = useLocation();
  const bannerAtual = bannerItens.find((item) => item.path === location.pathname);
  const imagemBanner = bannerAtual ? bannerAtual.img : cerealGrains; 

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

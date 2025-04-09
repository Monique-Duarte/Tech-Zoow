import { useLocation } from "react-router-dom";
import cerealGrains from "../../assets/cerealGrains.jpg";
import pellet from "../../assets/pellet.jpg";
import grains from "../../assets/grains.jpg";
import industria from "../../assets/industria.jpg";

const bannerItens = [
  { img: cerealGrains, path: "/" },
  { img: pellet, path: "/sobre" },
  { img: grains, path: "/servicos" },
  { img: industria, path: "/projetos" },
  { img: cerealGrains, path: "/uteis" },
  { img: cerealGrains, path: "/contato" },
];

const Banner = () => {
  const location = useLocation();
  const bannerAtual = bannerItens.find((item) => item.path === location.pathname);
  const imagemBanner = bannerAtual ? bannerAtual.img : cerealGrains; 

  return (
    <div>
      <img
        className="w-[100vw] md:h-[50vh] object-cover"
        src={imagemBanner}
        alt="Banner"
      />
    </div>
  );
};

export default Banner;

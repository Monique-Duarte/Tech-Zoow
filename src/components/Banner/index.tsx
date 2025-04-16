import { useLocation } from "react-router-dom";
import industria from "../../assets/industria.jpg";
import Test from "../../assets/test.jpg"
import Extrusada from "../../assets/extrusada.jpeg"
import Fabrica from "../../assets/Fabrica.jpeg"
import imgBanner from "../../assets/banner.jpg"


const bannerItens = [
  { img: Extrusada, path: "/" },
  { img: Fabrica, path: "/sobre" },
  { img: imgBanner, path: "/servicos" },
  { img: industria, path: "/projetos" },
  { img: Test, path: "/uteis" },
  { img: Extrusada, path: "/contato" },
];

const Banner = () => {
  const location = useLocation();
  const bannerAtual = bannerItens.find((item) => item.path === location.pathname);
  const imagemBanner = bannerAtual ? bannerAtual.img : Extrusada; 

  return (
    <div>
      <img
        className="w-[100vw] md:h-[50vh] h-[30vw] object-cover"
        src={imagemBanner}
        alt="Banner"
      />
    </div>
  );
};

export default Banner;

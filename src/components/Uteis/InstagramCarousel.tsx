"use client";

import { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import InstagramPost from "./InstagramPost";
import CarouselNavigation from "./CarouselNavigation";

const posts = [
  "https://www.instagram.com/p/DAG06DrRMWR/",
  "https://www.instagram.com/p/CiFt0MoLnnO/",
  "https://www.instagram.com/p/CmZ6NpEOcQe/",
  "https://www.instagram.com/p/CjgFeKguGdR/",
  "https://www.instagram.com/p/CojCcfPOvZG/",
  "https://www.instagram.com/p/ChA2pLqOTIQ/",
  "https://www.instagram.com/p/CgxmzV3uDv-/",
  "https://www.instagram.com/p/CgZoIdsO7US/",
  "https://www.instagram.com/p/CZW-cPelE6W/",
  "https://www.instagram.com/p/CVGzZxilmgH/",
  "https://www.instagram.com/p/CTlI1iEFxq1/",
  "https://www.instagram.com/p/CQH2xgRnaBU/",
  "https://www.instagram.com/p/CG3DyBjHALh/",
  "https://www.instagram.com/p/CGhyE2mlxhd/",
  "https://www.instagram.com/p/CDtb7j_HmCI/",
  "https://www.instagram.com/p/C-lh7QTSeZx/",
];

const InstagramCarousel = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    rubberband: false,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 },
      },
    },
  });

  const [currentSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    clearTimeout(timeoutRef.current!);
    timeoutRef.current = setTimeout(() => {
      if (slider && slider.current) {
        slider.current.next();
      }
    }, 5000);
    return () => clearTimeout(timeoutRef.current!);
  }, [currentSlide, slider]);

  return (
    <div className="relative mx-auto mt-10 md:w-[90%] flex justify-center items-center">
      <CarouselNavigation
        onPrev={() => slider.current?.prev()}
        onNext={() => slider.current?.next()}
      />

      <div
        ref={sliderRef}
        className="keen-slider w-[90vw] touch-pan-y"
        onMouseEnter={() => clearTimeout(timeoutRef.current!)}
        onMouseLeave={() =>
          (timeoutRef.current = setTimeout(() => slider.current?.next(), 5000))
        }
      >
        {posts.map((url, index) => (
          <InstagramPost key={index} url={url} />
        ))}
      </div>
    </div>
  );
};

export default InstagramCarousel;
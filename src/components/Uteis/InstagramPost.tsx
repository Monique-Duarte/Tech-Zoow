"use client";

import { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const InstagramPosts = () => {
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

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
  ];

  useEffect(() => {
    clearTimeout(timeoutRef.current!);
    timeoutRef.current = setTimeout(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 5000);

    return () => clearTimeout(timeoutRef.current!);
  }, [slider]);

  return (
    <div className="relative mt-10 flex justify-center items-center w-full">
      {/* Botão Esquerdo */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-white rounded-full p-2 shadow-lg shadow-black/30 hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Carrossel */}
      <div
        ref={sliderRef}
        className="keen-slider md:w-[60vw] w-[90vw] max-w-screen-lg touch-pan-y"
        onMouseEnter={() => clearTimeout(timeoutRef.current!)}
        onMouseLeave={() =>
          (timeoutRef.current = setTimeout(() => slider.current?.next(), 5000))
        }
      >
        {posts.map((url, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center"
          >
            <div
              className="relative w-full aspect-[1/1.3] max-w-[300px] rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => window.open(url, "_blank")}
            >
              <iframe
                src={`${url}embed`}
                className="w-full h-full"
                frameBorder="0"
                allowTransparency
                scrolling="no"
                allow="encrypted-media"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botão Direito */}
      <button
        onClick={() => slider.current?.next()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-white rounded-full p-2 shadow-lg shadow-black/30 hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default InstagramPosts;
"use client";

import { useEffect, useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const InstagramPosts = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1, // 👈 Agora mostra 1 no mobile
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  const [currentSlide] = useState(0);
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
    "https://www.instagram.com/p/CVGzZxilmgH/",
    "https://www.instagram.com/p/CTlI1iEFxq1/",
    "https://www.instagram.com/p/CQH2xgRnaBU/",
    "https://www.instagram.com/p/CG3DyBjHALh/",
    "https://www.instagram.com/p/CGhyE2mlxhd/",
    "https://www.instagram.com/p/CDtb7j_HmCI/",
    "https://www.instagram.com/p/C-lh7QTSeZx/",
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "//www.instagram.com/embed.js");
    script.setAttribute("async", "true");
    document.body.appendChild(script);
  }, []);

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
    <div className="relative mx-auto mt-10 md:w-[90%] items-center flex justify-center">
      {/* Botão esquerdo */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-999 bg-white rounded-full shadow p-2 cursor-pointer pointer-events-auto hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Carrossel */}
      <div
        ref={sliderRef}
        className="keen-slider w-full"
        onMouseEnter={() => clearTimeout(timeoutRef.current!)}
        onMouseLeave={() =>
          (timeoutRef.current = setTimeout(() => slider.current?.next(), 5000))
        }
      >
        {posts.map((url, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <div className="w-full max-w-[340px] aspect-[1/1.3] overflow-hidden">
              <blockquote
                className="instagram-media w-full h-full pointer-events-none" // 👈 isso impede que o clique afete ele
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  border: 0,
                  borderRadius: 3,
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "0 auto",
                  width: "100%",
                }}
              ></blockquote>
            </div>
          </div>
        ))}
      </div>

      {/* Botão direito */}
      <button
        onClick={() => slider.current?.next()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-999 bg-white rounded-full shadow p-2 cursor-pointer pointer-events-auto hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default InstagramPosts;

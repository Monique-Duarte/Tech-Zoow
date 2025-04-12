import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

const CarouselNavigation = ({ onPrev, onNext }: CarouselNavigationProps) => (
  <>
    <button
      onClick={onPrev}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-white rounded-full shadow p-2 cursor-pointer hover:bg-gray-100"
    >
      <ChevronLeft size={24} />
    </button>
    <button
      onClick={onNext}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-white rounded-full shadow p-2 cursor-pointer hover:bg-gray-100"
    >
      <ChevronRight size={24} />
    </button>
  </>
);

export default CarouselNavigation;
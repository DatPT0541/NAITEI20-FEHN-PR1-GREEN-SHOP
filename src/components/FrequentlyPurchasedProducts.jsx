import React, { useState, useEffect } from "react";
import { mockProducts } from "../mock/mockProducts";
import SmallProductCard from "./SmallProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_SLIDE = 3;
const MAX_ITEMS_NORMAL = 6;

const FrequentlyPurchasedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlideMode, setIsSlideMode] = useState(false);

  const totalSlides = Math.max(1, Math.ceil(mockProducts.length / ITEMS_PER_SLIDE));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSlideMode(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative w-full pb-10 md:pb-0">
      <div className="flex items-center justify-between mb-3 border-b border-gray-200 relative">
        <div className="relative">
          <h2 className="text-green-600 font-semibold">Sản phẩm mua nhiều</h2>
          <span className="absolute bottom-[-2px] left-0 w-[160px] h-[3px] bg-green-600"></span>
        </div>
        {isSlideMode && totalSlides > 1 && (
          <div className="flex gap-2">
            <button
              className="bg-white border border-gray-300 text-gray-500 p-1 rounded-full shadow-md hover:border-gray-500 transition"
              onClick={prevSlide}
            >
              <ChevronLeft size={10} />
            </button>
            <button
              className="bg-white border border-gray-300 text-gray-500 p-1 rounded-full shadow-md hover:border-gray-500 transition"
              onClick={nextSlide}
            >
              <ChevronRight size={10} />
            </button>
          </div>
        )}
      </div>

      <div className="mr-6 flex flex-col gap-0">
        {isSlideMode
          ? mockProducts
            .slice(currentSlide * ITEMS_PER_SLIDE, (currentSlide + 1) * ITEMS_PER_SLIDE)
            .map((product) => (
              <SmallProductCard key={product.id} product={product} />
            ))
          : mockProducts
            .slice(0, MAX_ITEMS_NORMAL)
            .map((product) => (
              <SmallProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default FrequentlyPurchasedProducts;

import React, { useState } from "react";
import { mockProducts } from "../mock/mockProducts";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_SLIDE = 6;

const PromotionalProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.max(1, Math.ceil(mockProducts.length / ITEMS_PER_SLIDE));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-4 border-b border-gray-200 relative">
        <div className="relative">
          <h2 className="text-green-600 font-semibold">Sản phẩm khuyến mãi</h2>
          <span className="absolute bottom-[-2px] left-0 w-[180px] h-[3px] bg-green-600"></span>
        </div>
        {totalSlides > 1 && (
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

      <div className="grid grid-cols-3 gap-6">
        {mockProducts
          .slice(currentSlide * ITEMS_PER_SLIDE, (currentSlide + 1) * ITEMS_PER_SLIDE)
          .map((product) => (
            <div key={product.id} className="h-72">
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PromotionalProducts;

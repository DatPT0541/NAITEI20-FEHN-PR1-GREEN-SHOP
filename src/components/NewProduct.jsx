import React, { useState, useEffect } from "react";
import { mockProducts } from "../mock/mockProducts";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_SLIDE_MAX = 8;
const ITEMS_PER_SLIDE_MIN = 1;

const ProductCarousel = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(ITEMS_PER_SLIDE_MAX)
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(mockProducts.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(ITEMS_PER_SLIDE_MIN);
      } else {
        setItemsPerSlide(ITEMS_PER_SLIDE_MAX);
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-4 border-b border-gray-200 relative">
        <div className="relative">
          <h2 className="text-green-600 font-semibold">Sản phẩm mới</h2>
          <span className="absolute bottom-[-2px] left-0 w-[140px] h-[3px] bg-green-600"></span>
        </div>
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {mockProducts
          .slice(currentSlide * itemsPerSlide, (currentSlide + 1) * itemsPerSlide)
          .map((product) => (
            <div key={product.id} className="h-85 md:h-72">
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductCarousel;

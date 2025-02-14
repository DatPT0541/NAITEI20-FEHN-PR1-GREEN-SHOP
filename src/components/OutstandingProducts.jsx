import React from "react";
import { mockProducts } from "../mock/mockProducts";
import ProductCard from "./ProductCard";

const OutstandingProducts = () => {
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-4 border-b border-gray-200 relative">
        <div className="relative">
          <h2 className="text-green-600 font-semibold">Sản phẩm nổi bật</h2>
          <span className="absolute bottom-[-2px] left-0 w-[180px] h-[3px] bg-green-600"></span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-2 row-span-2 h-120">
          <ProductCard product={mockProducts[0]} />
        </div>
        <div>
          <ProductCard product={mockProducts[1]} />
        </div>
        <div>
          <ProductCard product={mockProducts[2]} />
        </div>
        <div className="col-span-2 row-span-2 h-120">
          <ProductCard product={mockProducts[3]} />
        </div>
        <div>
          <ProductCard product={mockProducts[4]} />
        </div>
        <div>
          <ProductCard product={mockProducts[5]} />
        </div>
      </div>
    </div>
  );
};

export default OutstandingProducts;

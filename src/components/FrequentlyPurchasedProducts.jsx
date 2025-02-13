import React from "react";
import { mockProducts } from "../mock/mockProducts";
import SmallProductCard from "./SmallProductCard";

const FrequentlyPurchasedProducts = () => {
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-3 border-b border-gray-200 relative">
        <div className="relative">
          <h2 className="text-green-600 font-semibold">Sản phẩm mua nhiều</h2>
          <span className="absolute bottom-[-2px] left-0 w-[160px] h-[3px] bg-green-600"></span>
        </div>
      </div>

      <div className="mr-6 flex flex-col gap-0">
        {mockProducts.slice(0, 6).map((product) => (
          <SmallProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyPurchasedProducts;

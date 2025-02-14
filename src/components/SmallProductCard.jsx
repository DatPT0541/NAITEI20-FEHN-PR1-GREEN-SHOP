import React from "react";
import { Star } from "lucide-react";

const SmallProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 p-[0.581rem] bg-white hover:shadow-md transition cursor-pointer flex items-center gap-3"
      onClick={() => console.log("Đã bấm vào:", product.name)}
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-20 h-20 object-cover"
      />

      <div className="flex flex-col justify-center">
        <h2 className="text-sm font-semibold text-gray-700">{product.name}</h2>

        <div className="flex items-center text-yellow-400 mt-1">
          {[...Array(5)].map((_, i) => {
            const currentStar = i + 1;
            return (
              <Star
                key={i}
                size={14}
                fill={product.rating >= currentStar ? "currentColor" : product.rating >= currentStar - 0.5 ? "url(#halfStar)" : "none"}
                stroke="currentColor"
              />
            );
          })}
          <svg width="0" height="0">
            <defs>
              <linearGradient id="halfStar">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="text-red-500 font-bold text-sm mt-1">
          {product.price.toLocaleString("vi-VN")} ₫
        </div>
      </div>
    </div >
  );
};

export default SmallProductCard;

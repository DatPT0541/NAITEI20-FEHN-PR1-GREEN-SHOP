import React from "react";
import { mockNews } from "../mock/mockNews";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-4 border-b border-gray-200 relative">
        <div className="relative">
          <h2 className="text-green-600 font-semibold">Tin tức</h2>
          <span className="absolute bottom-[-2px] left-0 w-[180px] h-[3px] bg-green-600"></span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {mockNews.slice(0, 3).map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default News;

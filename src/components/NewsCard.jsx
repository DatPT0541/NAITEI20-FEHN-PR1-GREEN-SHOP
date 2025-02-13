import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="text-left border border-gray-200 p-4 bg-white hover:shadow-md transition cursor-pointer">
      <img
        src={news.img}
        alt={news.title}
        className="w-full h-40 object-cover mb-3"
      />

      <p className="text-gray-500 text-sm italic">
        {news.date}
      </p>

      <h2 className="text-green-600 font-semibold text-lg hover:underline mt-1">
        {news.title}
      </h2>

      <p className="text-gray-700 text-sm mt-2">
        {news.description}
      </p>

      <a href={news.link} className="text-green-500 font-medium text-sm mt-3 block hover:underline">
        Đọc tiếp
      </a>
    </div>
  );
};

export default NewsCard;

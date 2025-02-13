// src/components/Header.jsx
import React, { useState } from "react";

import {
  RightOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import Slide1 from "../../assets/images/slide-banner1.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ProductList = () => {
  const categories = [
    { name: "Cây chậu treo", count: 10 },
    { name: "Cây có hoa", count: 5 },
    { name: "Cây dây leo" },
    { name: "Cây để bàn" },
    { name: "Cây may mắn" },
    { name: "Cây trang trí" },
    { name: "Cây nội thất" },
  ];

  const priceRanges = [
    "200.000 Đ - 400.000 Đ",
    "400.000 Đ - 600.000 Đ",
    "600.000 Đ - 800.000 Đ",
    "800.000 Đ - 1.000.000 Đ",
    "1.000.000 Đ - 2.000.000 Đ",
  ];

  const products = [
    {
      name: "Cây Dạ Lam",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      name: "Cây Danh Dự",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 4.0,
    },
    {
      name: "Cây chân chim",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 5.0,
    },
    {
      name: "Cây Dạ Lam",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      name: "Cây Danh Dự",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 4.0,
    },
    {
      name: "Cây chân chim",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 5.0,
    },
    {
      name: "Cây Dạ Lam",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      name: "Cây Danh Dự",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 4.0,
    },
    {
      name: "Cây chân chim",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 5.0,
    },
    {
      name: "Cây Dạ Lam",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      name: "Cây Danh Dự",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 4.0,
    },
    {
      name: "Cây chân chim",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 5.0,
    },
    {
      name: "Cây chân mèoafkafkfafa",
      price: "250.000 đ",
      oldPrice: "250.000 đ",
      image: "https://via.placeholder.com/150",
      rating: 5.0,
    },
  ];
  const colors = [
    { name: "Xanh cây", color: "bg-green-500" },
    { name: "Tím", color: "bg-purple-500" },
    { name: "Vàng", color: "bg-yellow-500" },
    { name: "Đỏ cam", color: "bg-orange-500" },
    { name: "Xanh trời", color: "bg-blue-500" },
    { name: "Hồng", color: "bg-pink-500" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const itemsPerPage = viewMode === "grid" ? 9 : 5; // 9 items for grid, 5 for list

  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Lấy danh sách sản phẩm theo trang
  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="px-50 pt-10">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#666",
              fontWeight: 500,
            }}
          >
            Home
          </Link>
          <Typography
            color="primary"
            style={{
              fontWeight: 500,
              color: "#36B37E",
            }}
          >
            Danh sách sản phẩm
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="px-50 flex text-left pt-10">
        <div className="w-1/4">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Danh mục sản phẩm</h3>
            <div className="h-1 w-20 bg-green-500 mb-4"></div>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer "
                >
                  <RightOutlined className="text-[10px] color-[#898989] pr-2" />
                  <span>{category.name}</span>
                  {category.count && (
                    <span className="text-gray">({category.count})</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Tìm theo giá */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Tìm theo giá</h3>
            <div className="h-1 w-20 bg-green-500 mb-4"></div>
            <ul className="space-y-2">
              {priceRanges.map((range, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-green-600 cursor-pointer"
                >
                  <RightOutlined className="text-[10px] color-[#898989] pr-2" />
                  {range}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Tìm theo màu</h3>
            <div className="h-1 w-20 bg-green-500 mb-4"></div>
            <div className="grid grid-cols-2 gap-4">
              {colors.map((color, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className={`w-6 h-6 rounded-full ${color.color}`}></div>
                  <span className="text-gray-700 font-medium">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="w-full mb-6">
            <img src={Slide1} alt="banner" className="w-full h-30" />
          </div>
          <div className="flex items-center justify-between py-4">
            {/* Icons for view switching */}
            <div className="flex items-center space-x-4">
              <button
                className={`p-2 ${viewMode === "grid" ? "bg-gray-200" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                <AppstoreOutlined
                  style={{ fontSize: "24px", color: "green" }}
                />
              </button>
              <button
                className={`p-2 ${viewMode === "list" ? "bg-gray-200" : ""}`}
                onClick={() => setViewMode("list")}
              >
                <UnorderedListOutlined
                  style={{ fontSize: "24px", color: "gray" }}
                />
              </button>
            </div>

            {/* Dropdowns for sorting and showing */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 font-medium">Sắp xếp theo</span>
                <select className="border border-gray-300 rounded px-2 py-1">
                  <option>Tên sản phẩm</option>
                  <option>Giá thấp đến cao</option>
                  <option>Giá cao đến thấp</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-gray-600 font-medium">Show</span>
                <select className="border border-gray-300 rounded px-2 py-1">
                  <option>15</option>
                  <option>30</option>
                  <option>50</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            {/* Danh sách sản phẩm */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-3" : "grid-cols-1"
              }`}
            >
              {displayedProducts.map((product, index) => (
                <div
                  key={index}
                  className={`border p-4 rounded-lg shadow hover:shadow-lg flex ${
                    viewMode === "list"
                      ? "flex-row items-center space-x-4"
                      : "flex-col"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`${
                      viewMode === "list" ? "w-40 h-40" : "w-full h-40"
                    } object-cover mb-4`}
                  />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      Đây là thông tin mô tả sản phẩm. Mô tả này sẽ hiển thị
                      trong dạng danh sách.
                    </p>
                    <div className="text-red-500 font-bold text-lg">
                      {product.price}
                    </div>
                    <div className="text-gray-400 line-through">
                      {product.oldPrice}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Phân trang */}
            <div className="flex items-center justify-end space-x-2 mt-6 pt-20 pb-20">
              <button
                className="px-4 py-2 border border-gray-300 rounded-30 hover:bg-gray-100"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Trang trước
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`px-4 py-2 border rounded-30 ${
                    currentPage === index + 1
                      ? "bg-teal-500 text-white border-teal-500"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => goToPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="px-4 py-2 border border-gray-300 rounded-30 hover:bg-gray-100"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Trang cuối
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;

import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { RightOutlined } from "@ant-design/icons";
import { BlogPost } from "../../components/BlogPost";
import { mockNews } from "../../mock/mockNews";
import { DownOutlined } from "@ant-design/icons";
import { mockProducts } from "../../mock/mockProducts";
import { categories } from "../../mock/mockCategory";
import { tags } from "../../mock/mockTags";
const News = () => {
  const [listPosts, setListPosts] = useState(mockNews);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const goToPage = (page) => {
    if (page >= 1 && page <= Math.ceil(listPosts.length / itemsPerPage)) {
      setCurrentPage(page);
    }
  };

  // TÌM THEO CATE
  const [filters, setFilters] = useState({
    category: null,
    tags: null,
  });
  const categoryProductCount = categories.map((category) => {
    const count = mockProducts.filter((product) =>
      product.categories.includes(category.id)
    ).length;
    return { ...category, count };
  });

  // Hàm xử lý bộ lọc
  const onFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    let filtered = mockNews;

    // Lọc theo category nếu có
    if (newFilters.category) {
      filtered = filtered.filter((post) =>
        post.categories.includes(newFilters.category)
      );
    }

    // Lọc theo tags nếu có
    if (newFilters.tags) {
      filtered = filtered.filter((post) => post.tags.includes(newFilters.tags));
    }

    setListPosts(filtered);
  };

  return (
    <>
      {/* BreadCrumb */}
      <div className="px-50 pt-10">
        <Breadcrumbs aria-label="breadcrumb">
          <Typography
            color="primary"
            style={{
              fontWeight: 500,
              color: "#36B37E",
            }}
          >
            Tin tức
          </Typography>
        </Breadcrumbs>
      </div>

      <div className="px-50 flex text-left pt-10">
        {/* Right component */}
        <div className="w-1/4">
          {/* Danh mục sản phẩm */}
          <div className="mb-6">
            <div className="flex flex-row border border-gray-300 rounded-md p-2 md:border-none">
              <h3 className="text-lg font-bold mb-2 text-green-600">
                Danh mục sản phẩm
              </h3>
              <div className="px-2 pt-1 block md:hidden">
                <DownOutlined onClick={() => handleShowOption(2)} />
              </div>
            </div>
            <div className="hidden md:block h-1 w-20 bg-green-500 mb-4"></div>
            <ul className="hidden md:block space-y-2">
              {categoryProductCount.map((category, index) => (
                <li
                  key={category.id}
                  className={`flex items-center text-gray-700 hover:text-green-600 cursor-pointer ${
                    filters.category === category.id
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600`}
                  onClick={() => {
                    // Nếu category đã được chọn, click thêm lần nữa sẽ bỏ chọn
                    const newCategory =
                      filters.category === category.id ? null : category.id;
                    onFilterChange("category", newCategory);
                  }}
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

          {/* Tin tức nổi bật */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Tin tức nổi bật</h3>
            <div className="h-1 w-20 bg-green-500 mb-4"></div>
            <ul className="space-y-4">
              {mockNews.map((item) => (
                <li key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <p className="text-sm text-gray-800">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog tag */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Blog tag</h3>
            <div className="h-1 w-20 bg-green-500 mb-4"></div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border-[1px] border-gray-200 rounded-100 text-sm ${
                    filters.tags === tag.id
                      ? "bg-green-400 text-white "
                      : "bg-white text-gray-700 hover:bg-gray-100 "
                  }`}
                  onClick={() => {
                    // Nếu category đã được chọn, click thêm lần nữa sẽ bỏ chọn
                    const newTag = filters.tags === tag.id ? null : tag.id;
                    onFilterChange("tags", newTag);
                  }}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Left component */}
        <div className="w-3/4">
          {/* List tin tức */}
          {listPosts.length === 0 ? (
            <p className="text-gray-700 text-center mt-10">
              Không có bài viết nào
            </p>
          ) : (
            <div className="w-full px-10">
              {listPosts
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((post, index) => (
                  <BlogPost key={index} post={post} />
                ))}
            </div>
          )}

          {/* Phân trang */}
          <div className="flex items-center justify-end space-x-2 mt-6 pt-20 pb-20">
            <button
              className="px-4 py-2 border border-gray-300 rounded-30 hover:bg-gray-100"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Trang trước
            </button>

            {Array.from(
              { length: Math.ceil(listPosts.length / itemsPerPage) },
              (_, index) => (
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
              )
            )}

            <button
              className="px-4 py-2 border border-gray-300 rounded-30 hover:bg-gray-100"
              onClick={() => goToPage(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(listPosts.length / itemsPerPage)
              }
            >
              Trang cuối
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;

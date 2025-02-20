import React, { useState } from "react";
import {
  Table,
  Tag,
  Image,
  Badge,
  Tooltip,
  Space,
  Modal,
  Input,
  message,
  Button,
  Rate,
  Select,
  Upload,
} from "antd";
import { mockProducts } from "../../../mock/mockProducts";
import { categories } from "../../../mock/mockCategory";
import { colors } from "../../../mock/mockColors";
import { PlusOutlined } from "@ant-design/icons";

const ProductsManagement = () => {
  // Hàm chuyển đổi id thành tên danh mục
  const getCategoryNames = (categoryIds) => {
    return categoryIds.map((id) => {
      const category = categories.find((cat) => cat.id === id);
      return category ? category.name : "Không xác định";
    });
  };

  // Hàm chuyển đổi id thành thông tin màu sắc
  const getColorTags = (colorIds) => {
    return colorIds.map((id) => {
      const color = colors.find((col) => col.id === id);
      return color ? (
        <Tag
          color={color.eName.toLowerCase()}
          key={id}
          className={`text-white rounded-full px-3 py-1`}
        >
          {color.name}
        </Tag>
      ) : (
        <Tag key={id}>Không xác định</Tag>
      );
    });
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [updatedName, setUpdatedName] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [updatedOldPrice, setUpdatedOldPrice] = useState("");
  const [updatedCategories, setUpdatedCategories] = useState([]);
  const [updatedColors, setUpdatedColors] = useState([]);
  const [updatedImages, setUpdatedImages] = useState([]);

  const [products, setProducts] = useState(
    mockProducts.map((item, index) => ({
      ...item,
      key: item.id || index,
    }))
  );

  // Khi nhấn Sửa
  const handleEdit = (record) => {
    setEditingProduct(record);
    setUpdatedName(record.name);
    setUpdatedPrice(record.price);
    setUpdatedOldPrice(record.oldPrice);
    setUpdatedCategories(record.categories);
    setUpdatedColors(record.colors);
    setUpdatedImages(record.images.map((img) => ({ url: img })));
    setIsEditModalOpen(true);
  };

  // Khi nhấn Xóa
  const handleDelete = (record) => {
    setEditingProduct(record);
    console.log(record);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    const updatedProducts = products.filter(
      (item) => item.id !== editingProduct.id
    );
    console.log(editingProduct.id);
    console.log(updatedProducts.length);
    setProducts(updatedProducts);
    setIsDeleteModalOpen(false);
    message.success("Đã xóa sản phẩm thành công!");
  };

  // Khi nhấn Cập nhật
  const handleUpdate = () => {
    const updatedProducts = products.map((item) => {
      if (item.key === editingProduct.key) {
        return {
          ...item,
          name: updatedName,
          price: updatedPrice,
          oldPrice: updatedOldPrice,
          categories: updatedCategories,
          colors: updatedColors,
          images: updatedImages.map((img) => img.url),
        };
      }
      return item;
    });

    setProducts(updatedProducts);
    setIsEditModalOpen(false);
    message.success("Đã cập nhật Product thành công!");
  };

  // Khi nhấn Thêm mới
  const handleAdd = () => {
    // Tìm ID lớn nhất hiện tại và cộng thêm 1
    const maxId = Math.max(...products.map((item) => item.id), 0);
    const newProduct = {
      id: maxId + 1,
      key: maxId + 1,
      name: updatedName,
      price: updatedPrice,
      oldPrice: updatedOldPrice,
      categories: updatedCategories,
      colors: updatedColors,
    };

    setProducts([...products, newProduct]);
    setIsAddModalOpen(false);
    message.success("Đã thêm sản phẩm thành công!");
  };

  // Khi chọn ảnh từ máy tính
  const handleImageChange = ({ fileList }) => {
    const imageUrls = fileList.map((file) => {
      // Nếu là ảnh mới chọn, dùng URL.createObjectURL để xem trước
      if (file.originFileObj) {
        return { url: URL.createObjectURL(file.originFileObj) };
      }
      // Nếu là ảnh đã có, giữ nguyên url cũ
      return file;
    });
    setUpdatedImages(imageUrls);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (text) => <span className="font-bold">{text}</span>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "images",
      key: "images",
      align: "center",
      render: (images) => (
        <Image
          src={images[0]}
          alt="Product"
          width={60}
          height={60}
          className="rounded-lg object-cover"
          preview={{ mask: "Xem ảnh" }}
        />
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Giá hiện tại",
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (price) => (
        <span className="text-red-500 font-bold">
          {price.toLocaleString()}đ
        </span>
      ),
    },
    {
      title: "Giá cũ",
      dataIndex: "oldPrice",
      key: "oldPrice",
      align: "center",
      render: (oldPrice) => (
        <span className="line-through text-gray-400">
          {oldPrice.toLocaleString()}đ
        </span>
      ),
    },
    {
      title: "Giảm giá",
      dataIndex: "discount",
      key: "discount",
      align: "center",
      render: (discount) => (
        <Badge count={`-${discount}%`} style={{ backgroundColor: "#52c41a" }} />
      ),
    },
    {
      title: "Đánh giá",
      dataIndex: "rating",
      key: "rating",
      align: "center",
      render: (rating) => <Rate disabled defaultValue={rating} />,
    },
    {
      title: "Danh mục",
      dataIndex: "categories",
      key: "categories",
      align: "center",
      render: (categories) =>
        getCategoryNames(categories).map((name, index) => (
          <Tag color="blue" key={index}>
            {name}
          </Tag>
        )),
    },
    {
      title: "Màu sắc",
      dataIndex: "colors",
      key: "colors",
      align: "center",
      render: (colors) => getColorTags(colors),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => handleEdit(record)}
          >
            Sửa
          </button>
          <button
            className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300"
            onClick={() => handleDelete(record)}
          >
            Xóa
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="mb-4 text-right">
        <Button
          type="primary"
          onClick={() => setIsAddModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 border-none flex items-center justify-center"
          shape="circle" // Hình tròn
          icon={<PlusOutlined />} // Thay bằng icon
        />
      </div>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        bordered
        pagination={{ pageSize: 5 }}
      />

      {/* Modal Thêm Category */}
      <Modal
        title="Thêm sản phẩm"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        onOk={handleAdd}
        okText="Thêm"
        cancelText="Hủy"
      >
        <div className="pt-5">
          <Input
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            placeholder="Tên sản phẩm"
            className="mb-3"
          />
        </div>
        <div className="pt-5">
          <Input
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(Number(e.target.value))}
            placeholder="Giá hiện tại"
            type="number"
            className="mb-3"
          />
        </div>
        <div className="pt-5">
          <Input
            value={updatedOldPrice}
            onChange={(e) => setUpdatedOldPrice(Number(e.target.value))}
            placeholder="Giá cũ"
            type="number"
            className="mb-3"
          />
        </div>
        <div className="pt-5">
          <Select
            mode="multiple"
            placeholder="Chọn danh mục"
            value={updatedCategories}
            onChange={(value) => setUpdatedCategories(value)}
            className="w-full mb-3"
            options={categories.map((cat) => ({
              label: cat.name,
              value: cat.id,
            }))}
          />
        </div>
        <div className="pt-5">
          <Select
            mode="multiple"
            placeholder="Chọn màu sắc"
            value={updatedColors}
            onChange={(value) => setUpdatedColors(value)}
            className="w-full"
            options={colors.map((col) => ({
              label: col.name,
              value: col.id,
            }))}
          />
        </div>
        <div className="pt-5">
          <Upload
            listType="picture-card"
            fileList={updatedImages}
            onChange={handleImageChange}
            beforeUpload={() => false} // Không upload ngay, chỉ xem trước
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Chọn ảnh</div>
            </div>
          </Upload>
        </div>
      </Modal>

      {/* Modal Sửa Category */}
      <Modal
        title="Sửa sản phẩm"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        onOk={handleUpdate}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        <div className="pt-5">
          <Input
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            placeholder="Tên sản phẩm"
            className="mb-3"
          />
        </div>
        <div className="pt-5">
          <Input
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(Number(e.target.value))}
            placeholder="Giá hiện tại"
            type="number"
            className="mb-3"
          />
        </div>
        <div className="pt-5">
          <Input
            value={updatedOldPrice}
            onChange={(e) => setUpdatedOldPrice(Number(e.target.value))}
            placeholder="Giá cũ"
            type="number"
            className="mb-3"
          />
        </div>
        <div className="pt-5">
          <Select
            mode="multiple"
            placeholder="Chọn danh mục"
            value={updatedCategories}
            onChange={(value) => setUpdatedCategories(value)}
            className="w-full mb-3"
            options={categories.map((cat) => ({
              label: cat.name,
              value: cat.id,
            }))}
          />
        </div>
        <div className="pt-5">
          <Select
            mode="multiple"
            placeholder="Chọn màu sắc"
            value={updatedColors}
            onChange={(value) => setUpdatedColors(value)}
            className="w-full"
            options={colors.map((col) => ({
              label: col.name,
              value: col.id,
            }))}
          />
        </div>
      </Modal>

      {/* Modal Xóa */}
      <Modal
        title="Xóa Category"
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onOk={handleDeleteConfirm}
        okText="Chắc chắn"
        cancelText="Hủy"
      >
        <div>Bạn có chắc chắn muốn xóa Category này không?</div>
      </Modal>
    </div>
  );
};

export default ProductsManagement;

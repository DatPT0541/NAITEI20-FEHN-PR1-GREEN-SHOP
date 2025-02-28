import React, { useState } from "react";
import { Space, Table, Modal, Input, message, Button } from "antd";
import { categories as initialCategories } from "../../../mock/mockCategory";
import { PlusOutlined } from "@ant-design/icons";

const CategoriesManagement = () => {
  const [categories, setCategories] = useState(
    initialCategories.map((item, index) => ({
      ...item,
      key: item.id || index,
    }))
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };
  // Khi nhấn Sửa
  const handleEdit = (record) => {
    setEditingCategory(record);
    setUpdatedName(record.name);
    setIsEditModalOpen(true);
  };

  // Khi nhấn Xóa
  const handleDelete = (record) => {
    setEditingCategory(record);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    const updatedCategories = categories.filter(
      (item) => item.key !== editingCategory.key
    );
    setCategories(updatedCategories);
    setIsDeleteModalOpen(false);
    message.success("Đã xóa Category thành công!");
  };

  // Khi nhấn Cập nhật
  const handleUpdate = () => {
    const updatedCategories = categories.map((item) => {
      if (item.key === editingCategory.key) {
        return {
          ...item,
          name: updatedName,
        };
      }
      return item;
    });

    setCategories(updatedCategories);
    setIsEditModalOpen(false);
    message.success("Đã cập nhật Category thành công!");
  };

  // Khi nhấn Thêm mới
  const handleAdd = () => {
    // Tìm ID lớn nhất hiện tại và cộng thêm 1
    const maxId = Math.max(...categories.map((item) => item.id), 0);
    const newCategory = {
      id: maxId + 1,
      key: maxId + 1,
      name: newCategoryName,
    };

    setCategories([...categories, newCategory]);
    setNewCategoryName("");
    setIsAddModalOpen(false);
    message.success("Đã thêm Category thành công!");
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
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
    <>
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
        dataSource={categories}
        onChange={handleChange}
      />

      {/* Modal Thêm Category */}
      <Modal
        title="Thêm Category"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        onOk={handleAdd}
        okText="Thêm"
        cancelText="Hủy"
      >
        <Input
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="Nhập tên Category mới"
        />
      </Modal>

      {/* Modal Sửa Category */}
      <Modal
        title="Sửa Category"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        onOk={handleUpdate}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        <Input
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
          placeholder="Nhập tên mới cho Category"
        />
      </Modal>

      {/* Modal Xóa */}
      <Modal
        title="Xóa sản phẩm"
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onOk={handleDeleteConfirm}
        okText="Chắc chắn"
        cancelText="Hủy"
      >
        <div>Bạn có chắc chắn muốn xóa sản phẩm này không?</div>
      </Modal>
    </>
  );
};

export default CategoriesManagement;

import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
const items = [
  {
    key: "user",
    label: <Link to="/admin/users">Người dùng</Link>,
  },
  {
    key: "category",
    label: <Link to="/admin/categories">Thể loại</Link>,
  },
  {
    key: "order",
    label: <Link to="/admin">Order</Link>,
  },
  {
    key: "product",
    label: <Link to="/admin/products">Sản phẩm</Link>,
  },
  {
    key: "dashboard",
    label: <Link to="/admin/dashboard">Dashboard</Link>,
  },
];
const LayoutAdmin = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  // Đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#009f5f",
          text: "white",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: "#009f5f",
          }}
          className="custom-menu"
        />
        <button
          onClick={handleLogout}
          className="text-black-500 hover:text-red-700"
        >
          Đăng xuất
        </button>
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      ></Footer>
    </Layout>
  );
};
export default LayoutAdmin;

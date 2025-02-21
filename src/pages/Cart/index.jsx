import React, { useState, useEffect } from "react";
import { Trash } from "lucide-react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalBeforeTax = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = totalBeforeTax * 0.1;
  const totalAfterTax = totalBeforeTax + tax;

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-100 md:w-300">


        <div className="flex items-center justify-between mb-4 relative">
          <div className="relative">
            <h1 className="text-green-600 font-semibold">GIỎ HÀNG</h1>
          </div>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500">Giỏ hàng trống.</p>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-2 border border-gray-300 w-20 md:w-32 uppercase">Hình ảnh</th>
                  <th className="p-2 border border-gray-300 uppercase">Tên sản phẩm</th>
                  <th className="p-2 border border-gray-300 hidden md:table-cell uppercase">Đơn giá</th>
                  <th className="p-2 border border-gray-300 uppercase">Số lượng</th>
                  <th className="p-2 border border-gray-300 hidden md:table-cell uppercase">Thành tiền</th>
                  <th className="p-2 border border-gray-300 uppercase">Xóa</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="border-l border-b border-gray-300 p-2 flex justify-center items-center">
                      <img src={item.images[0]} alt={item.name} className="w-20 h-24 object-cover md:w-32 md:h-36" />
                    </td>
                    <td className="border border-gray-300 p-2 text-green-600 font-medium uppercase">
                      {item.name}
                    </td>
                    <td className="border border-gray-300 p-2 hidden md:table-cell">
                      {item.price.toLocaleString("vi-VN")} đ
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-12 border border-gray-300 rounded p-1 text-center"
                        min="1"
                      />
                    </td>
                    <td className="border border-gray-300 p-2 hidden md:table-cell">
                      {(item.price * item.quantity).toLocaleString("vi-VN")} đ
                    </td>
                    <td className="border border-gray-300 p-2">
                      <button onClick={() => removeItem(item.id)} className="text-gray-700 hover:text-red-500">
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex gap-4 justify-end pt-8">
              <button className="border border-green-600 text-green-500 font-bold rounded-3xl hover:bg-green-100 w-45 h-12"
                onClick={() => alert("Hủy đơn hàng")}>
                HỦY ĐƠN HÀNG
              </button>
              <button className="bg-green-600 text-white font-bold rounded-3xl hover:bg-green-700 w-45 h-12"
                onClick={() => alert("Tiếp tục mua")}>
                TIẾP TỤC MUA
              </button>
            </div>

            <div className="mt-6 flex flex-col items-end overflow-x-auto">
              <table className="w-full md:w-1/2 border-collapse border border-gray-300 mt-6">
                <tbody>
                  <tr>
                    <td className="p-4 md:p-6 border-e border-b border-gray-300 text-green-600 font-bold text-left uppercase">
                      Tổng tiền (Chưa thuế)
                    </td>
                    <td className="p-4 md:p-6 border-b border-gray-300 text-green-600 font-bold text-right uppercase">
                      {totalBeforeTax.toLocaleString("vi-VN")} đ
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 border-e border-b border-gray-300 text-green-600 font-bold text-left uppercase">
                      Thuế (VAT 10%)
                    </td>
                    <td className="p-4 md:p-6 border-b border-gray-300 text-green-600 font-bold text-right uppercase">
                      {tax.toLocaleString("vi-VN")} đ
                    </td>
                  </tr>
                  <tr className="bg-green-600">
                    <td className="p-4 md:p-6 border-e border-b border-gray-300 text-white text-lg md:text-xl font-bold text-left uppercase">
                      Tổng thanh toán
                    </td>
                    <td className="p-4 md:p-6 border-b border-gray-300 text-white text-lg md:text-xl font-bold text-right uppercase">
                      {totalAfterTax.toLocaleString("vi-VN")} đ
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex gap-4 mt-4">
                <button className="bg-green-600 text-white font-bold rounded-3xl hover:bg-green-700 w-45 h-12"
                  onClick={() => alert("Bấm thanh toán")}>
                  THANH TOÁN
                </button>
              </div>
            </div >
          </div >
        )}
      </div >
    </div >
  );
};

export default Cart;

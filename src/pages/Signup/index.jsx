import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone || !email || !website || !password || !confirmPassword) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Mật khẩu nhập lại không khớp!");
      return;
    }

    alert(`Đăng ký thành công!\nHọ & Tên: ${fullName}\nSố ĐT: ${phone}\nEmail: ${email}\nWebsite: ${website}\nĐăng ký nhận thông tin: ${subscribe ? "Có" : "Không"}`);
  };

  return (
    <div className="flex flex-col items-center justify-start p-2 mt-20 mb-20">
      <div className="w-300">
        <div className="mb-6">
          <h1 className="text-left text-green-600 font-semibold uppercase text-xl">Thông tin cá nhân</h1>
        </div>

        <form onSubmit={handleSubmit} className="text-left space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Số ĐT <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Địa chỉ email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Website của bạn <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={subscribe}
              onChange={(e) => setSubscribe(e.target.checked)}
              className="appearance-none w-4 h-4 border-2 border-gray-400 bg-white checked:bg-gray-500 checked:border-gray-500 focus:ring-2 focus:ring-gray-300 mr-2"
            />
            <label className="text-gray-700">Đăng ký nhận thông tin qua email</label>
          </div>

          <div className="mb-6">
            <h1 className="text-left text-green-600 font-semibold uppercase text-xl">Thông tin tài khoản</h1>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">
                Mật khẩu <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Nhập lại mật khẩu <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>

          <div className="flex justify-start space-x-4">
            <button
              type="button"
              className="border border-green-600 text-green-500 font-bold rounded-3xl hover:bg-green-100 w-45 h-12"
              onClick={() => navigate("/login")}
            >
              QUAY LẠI
            </button>

            <button
              type="submit"
              className="bg-green-600 text-white font-bold rounded-3xl hover:bg-green-700 w-45 h-12"
            >
              ĐĂNG KÝ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

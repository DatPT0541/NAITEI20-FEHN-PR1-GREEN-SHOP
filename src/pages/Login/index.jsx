import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "../../mock/mockUsers";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ Email và Mật khẩu!");
      return;
    }

    // Kiểm tra email và password
    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Đăng nhập thành công
      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          key: user.key,
          name: user.name,
          email: user.email,
          remember: remember,
        })
      );

      if (user.role == "user") {
        navigate("/");
        window.location.reload();
      } else {
        navigate("/admin");
      }
    } else {
      // Đăng nhập thất bại
      alert("Email hoặc Mật khẩu không đúng!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start p-2 mt-20 mb-20">
      <div className="w-100 md:w-300">
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-20 space-y-10">
          <div className="space-y-5">
            <div className="flex items-center justify-between mb-4 relative">
              <div className="relative">
                <h1 className="text-green-600 font-semibold uppercase text-xl">
                  Thông tin cá nhân
                </h1>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10 mt-10">
              <div>
                <label className="text-left block text-gray-700">
                  Email của bạn
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded bg-white text-black dark:bg-white dark:text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="text-left block text-gray-700">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded bg-white text-black dark:bg-white dark:text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="flex items-center justify-start text-sm space-x-5">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="appearance-none w-4 h-4 border-2 border-gray-400 bg-white checked:bg-gray-500 checked:border-gray-500 focus:ring-2 focus:ring-gray-300 mr-2"
                  />
                  Ghi nhớ tài khoản
                </label>

                <a
                  href="#"
                  className="text-gray-500 italic hover:underline"
                  onClick={() => console.log("Forgot password")}
                >
                  Bạn quên mật khẩu?
                </a>
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-green-600 text-white font-bold rounded-3xl hover:bg-green-700 w-45 h-12"
                >
                  ĐĂNG NHẬP
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between mb-4 relative">
              <div className="relative">
                <h1 className="text-green-600 font-semibold uppercase text-xl">
                  Bạn chưa có tài khoản ?
                </h1>
              </div>
            </div>

            <p className="text-left text-sm text-gray-500">
              Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng
              hơn. Ngoài ra còn có rất nhiều chính sách và ưu đãi cho các thành
              viên.
            </p>

            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-green-600 text-white font-bold rounded-3xl hover:bg-green-700 w-45 h-12"
                onClick={() => navigate("/signup")}
              >
                ĐĂNG KÝ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

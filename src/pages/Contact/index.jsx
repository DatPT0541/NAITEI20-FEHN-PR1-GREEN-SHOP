import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !message) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    alert(
      `Gửi thành công!\nHọ & Tên: ${fullName}\nEmail: ${email}\nSố ĐT: ${phone}\nBình luận: ${message}`
    );
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className="px-10 md:px-50 pt-10">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#666",
            fontWeight: 500,
          }}
        >
          Trang chủ
        </Link>
        <Typography
          color="primary"
          style={{
            fontWeight: 500,
            color: "#36B37E",
          }}
        >
          Liên hệ
        </Typography>
      </Breadcrumbs>
      <div className="flex flex-col items-center justify-start p-0 mt-20 mb-20">
        <div className="w-full h-40">
          <iframe
            title="Google Map"
            className="w-full h-120"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1861.9551603664927!2d105.8152614!3d21.036274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab128b45bf23%3A0xd1d32b58169417cd!2zMjY2IFAuIMSQ4buZaSBD4bqlbiwgTGnhu4V1IEdpYWksIEJhIMSQw6xuaCwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1739760012287!5m2!1svi!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-300 mt-100 mb-20">
          <div className="text-left grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h1 className="text-green-600 font-semibold uppercase text-xl mb-6">
                THÔNG TIN LIÊN HỆ
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
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
                    className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
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
                    className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">
                    Bình luận <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 h-32"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-green-600 text-white font-bold rounded-3xl hover:bg-green-700 w-45 h-12"
                >
                  Gửi liên hệ
                </button>
              </form>
            </div>

            <div className="flex flex-col space-y-3">
              <div
                className="w-60 h-20 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/banner2.png')" }}
              ></div>

              <p className="text-gray-400 text-left">
                DKT được thành lập với niềm đam mê và khát vọng thành công trong
                lĩnh vực Thương mại điện tử. Chúng tôi đã và đang khẳng định
                được vị trí hàng đầu bằng những sản phẩm.
              </p>

              <div className="flex items-center space-x-4">
                <span className="text-green-600 text-lg">📞</span>
                <p className="text-gray-400">Điện thoại: (84-4) 66.558.868</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-green-600 text-lg">📧</span>
                <p className="text-gray-400">Email: info@dkt.com.vn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem("dontShowPopup", "true");
    }
    setIsVisible(false);
  };

  const handleChange = (e) => {
    setDontShowAgain(e.target.checked);
  };

  if (typeof window !== "undefined" && localStorage.getItem("dontShowPopup") === "true") {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#eeebe8] p-6 shadow-xl relative w-11/12 max-w-sm md:max-w-2xl text-center rounded-lg"
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row justify-center items-center mb-4">
              <img
                src="/images/pop_up.png"
                alt="Flowers"
                className="w-3/5 md:w-2/5 h-auto mb-4 md:mb-0"
              />
              <div className="text-left md:pl-4">
                <h2 className="text-xl md:text-2xl font-semibold italic text-gray-700 mb-2">
                  Nhận tin tức từ chúng tôi
                </h2>
                <h3 className="text-green-600 text-lg md:text-xl font-bold mb-4">
                  ĐĂNG KÝ EMAIL NGAY HÔM NAY
                </h3>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn vào đây"
                    className="bg-white border border-gray-300 p-2 w-90 md:w-auto flex-1 focus:outline-none focus:border-green-500 rounded-md"
                  />
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M2 12l1.41 1.41L11 5.83v13.34h2V5.83l7.59 7.58L22 12l-10-10L2 12z" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  Đăng ký email ngay hôm nay để nhận các thông tin về sự kiện
                  và các chương trình giảm giá từ chúng tôi
                </p>
                <div className="mt-4 text-left">
                  <input
                    type="checkbox"
                    id="dontShowAgain"
                    checked={dontShowAgain}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="dontShowAgain" className="text-gray-600 text-sm">
                    Không hiển thị lại thông báo này nữa
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;

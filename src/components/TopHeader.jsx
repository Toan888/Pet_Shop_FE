import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import {
  Bag,
  House,
  List,
  Repeat,
  Search,
  ShopWindow,
  SuitHeart,
} from "react-bootstrap-icons";
import { useTypewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

// Icon Item Component
const HeaderIconItem = ({ icon, label }) => (
  <div
    className="bg-white flex items-center px-4 h-10 rounded-full shadow hover:bg-yellow-400 transition cursor-pointer"
    title={label}
  >
    <span className="mr-2">{icon}</span>
    <p className="m-0">{label}</p>
  </div>
);

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const nav = useNavigate();
  const [text] = useTypewriter({
    words: ["Tìm sản phẩm...", "Tìm thương hiệu...", "Tìm ưu đãi hot..."],
    loop: 0,
    delaySpeed: 2000,
  });

  const iconItems = [
    { icon: <ShopWindow size={24} />, label: "Hệ thống" },
    { icon: <Repeat size={24} />, label: "So sánh" },
    { icon: <SuitHeart size={24} />, label: "Yêu thích" },
  ];

  return (
    <div className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          <img
            src={Logo}
            alt="Logo"
            className="max-w-[160px] h-auto object-contain"
            onClick={() => nav("/")}
          />
          <div className="relative flex-grow mx-4">
            <input
              className="h-10 px-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              placeholder={text}
            />
            <Search
              size={24}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            />
          </div>
          <div className="flex gap-3">
            {iconItems.map((item) => (
              <HeaderIconItem key={item.label} {...item} />
            ))}
            <div
              className="bg-white flex items-center px-4 h-10 rounded-full shadow hover:bg-yellow-400 transition cursor-pointer relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              title="Giỏ hàng"
            >
              <Bag size={24} className="mr-2" />
              <p className="m-0">Giỏ hàng</p>
              {isHovered && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-4">
                  <p className="text-center text-sm">
                    Không có sản phẩm nào trong giỏ hàng của bạn
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <List size={26} />
            </button>
            <img
              src={Logo}
              alt="Logo"
              className="max-w-[220px] h-auto object-contain"
            />
            <Bag size={26} />
          </div>

          {/* Search with Home Icon */}
          <div className="mt-3 flex items-center gap-2 relative">
            <input
              className="flex-grow h-10 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder={text}
            />
            <Search className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-900"></Search>
            <button className="bg-white p-2 rounded bg-red-600 shadow transition">
              <House size={20} className="text-white" />
            </button>
          </div>

          {isOpen && (
            <div className="mt-3 bg-white shadow-md rounded-lg p-4 space-y-2">
              {iconItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="block text-black hover:text-blue-500"
                >
                  {item.label}
                </a>
              ))}
              <a href="#" className="block text-black hover:text-blue-500">
                Giỏ hàng
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

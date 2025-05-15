import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navItems = [
    { label: "Trang chủ", color: "bg-green-600 text-white" },
    { label: "Giới thiệu", color: "bg-gray-100" },
    { label: "Sản phẩm", color: "bg-gray-100", dropdown: true },
    { label: "Câu hỏi thường gặp", color: "bg-gray-100" },
    { label: "Tin tức", color: "bg-gray-100" },
    { label: "Liên hệ", color: "bg-gray-100" },
    { label: "Mua hàng nhanh", color: "bg-red-600 text-white rotate-[2deg]" },
  ];
  const nav = useNavigate();
  return (
    <Container fluid className="bg-white py-3 shadow-sm hidden lg:block">
      <div className="items-center flex justify-around">
        <div
          className="flex w-26 justify-around items-center bg-yellow-400 px-4 py-2 rounded-lg w-fit"
          onClick={() => nav("/all")}
        >
          <List size={20} className="mr-2" />
          <p className="m-0 font-semibold">Danh mục sản phẩm</p>
        </div>

        <div className="flex justify-around items-center flex-wrap gap-1">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-2 mx-2 rounded-full text-sm font-medium cursor-pointer hover:opacity-90 transition-all duration-200 ${item.color}`}
            >
              <a href="#" className="text-decoration-none">
                {item.label}
                {item.dropdown && " ▼"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Header;

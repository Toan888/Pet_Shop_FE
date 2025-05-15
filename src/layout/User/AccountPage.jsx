import React, { useEffect, useState } from "react";
import ChangePassword from "./ChangePassword";
import AccountInfo from "./AccountInfo";
import OrderList from "./OrderList";
import AddressList from "./AddressList";
import {
  FaUser,
  FaCartShopping,
  FaLock,
  FaAddressBook,
  FaArrowRightFromBracket,
} from "react-icons/fa6"; // FaArrowUp đổi thành FaArrowRightFromBracket cho đúng nghĩa

import { useNavigate } from "react-router-dom";

const AccountPage = ({ setIsLoggedIn }) => {
  const nav = useNavigate();
  const [activeTab, setActiveTab] = useState("changePassword");
  const [users, setUsers] = useState({});
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    const token = localStorage.getItem("token");

    const fetchAddresses = async () => {
      if (!users?._id) return;

      try {
        const response = await fetch(
          `http://localhost:9999/users/${users._id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Lỗi khi lấy địa chỉ:", error);
      }
    };

    fetchAddresses();
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    nav("/");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return <AccountInfo />;
      case "orders":
        return <OrderList />;
      case "changePassword":
        return <ChangePassword />;
      case "address":
        return <AddressList />;
      default:
        return null;
    }
  };

  return (
    <div className="md:flex flex-col md:flex-row min-h-screen p-4 md:p-10 bg-gray-50">
      {/* Sidebar */}
      <div className="md:w-1/4 w-full md:pr-8 border-b md:border-r pb-4 md:pb-0">
        <p className="font-bold text-lg mb-4 text-center md:text-left">
          Xin chào,{" "}
          <span className="text-green-600">
            {users?.fullname || users?.displayName || "Unknow"}
          </span>
          !
        </p>
        <ul className="space-y-4 text-gray-700 gird md:block">
          <li>
            <button
              onClick={() => setActiveTab("info")}
              className={`flex items-center w-full text-left hover:text-yellow-500 ${
                activeTab === "info" ? "text-yellow-500 font-semibold" : ""
              }`}
            >
              <FaUser className="mr-2" /> Thông tin tài khoản
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center w-full text-left hover:text-yellow-500 ${
                activeTab === "orders" ? "text-yellow-500 font-semibold" : ""
              }`}
            >
              <FaCartShopping className="mr-2" /> Đơn hàng của bạn
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("changePassword")}
              className={`flex items-center w-full text-left hover:text-yellow-500 ${
                activeTab === "changePassword"
                  ? "text-yellow-500 font-semibold"
                  : ""
              }`}
            >
              <FaLock className="mr-2" /> Đổi mật khẩu
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("address")}
              className={`flex items-center w-full text-left hover:text-yellow-500 ${
                activeTab === "address" ? "text-yellow-500 font-semibold" : ""
              }`}
            >
              <FaAddressBook className="mr-2" /> Sổ địa chỉ (
              {users?.address?.length || 0})
            </button>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center w-full text-left hover:text-red-500 text-red-600 font-semibold"
            >
              <FaArrowRightFromBracket className="mr-2" /> Đăng xuất
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="md:w-3/4 w-full bg-white p-4 md:p-8 rounded shadow mt-4 md:mt-0">
        {renderContent()}
      </div>
    </div>
  );
};

export default AccountPage;

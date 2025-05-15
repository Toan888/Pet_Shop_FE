import React from "react";
import { Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const TopBarHead = () => {
  const nav = useNavigate();

  const loggedInStatus = localStorage.getItem("isLoggedIn");
  console.log(loggedInStatus);

  const users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
  const handleClick = () => {
    loggedInStatus ? nav("/account") : nav("/login");
  };
  return (
    <div className="bg-green-600">
      <div className="flex justify-around h-10 items-center">
        <div className="hidden md:block">
          <p className="text-white">Chào mừng bạn đến với Bean Farm!</p>
        </div>
        <div className="flex items-center">
          {loggedInStatus && users ? (
            <p
              className="text-white hover:text-yellow-300 flex items-center mr-4"
              onClick={handleClick}
            >
              <span>
                <Person size={26} />
              </span>
              {users ? users.fullname || users.displayName : "Đăng nhập"}
            </p>
          ) : (
            <p
              className="text-white hover:text-yellow-300 flex items-center mr-4"
              onClick={handleClick}
            >
              <span>
                <Person size={26} />
              </span>
              Tài khoản
            </p>
          )}
          <p className="text-white">
            Hotline:
            <span className="text-yellow-300 hover:text-white font-medium">
              1900 6750
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default TopBarHead;

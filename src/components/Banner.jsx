import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img/slider_1.png";
const Banner = () => {
  const nav = useNavigate();
  return (
    <div className=" flex justify-center items-center my-4">
      <div>
        <img
          onClick={() => {
            nav("/login ");
          }}
          src={img}
          alt="Banner"
          className="w-full h-auto cursor-pointer transition-transform duration-200 hover:scale-105 rounded"
        />
      </div>
    </div>
  );
};
export default Banner;

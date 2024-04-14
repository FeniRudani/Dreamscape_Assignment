import React from "react";
import Footerlogo from "../../Assets/Footerlogo.png";
import Navbar from "../../components/Navbar/Navbar";

const Footer = () => {
  return (
    <div className=" mt-24 w-[68.75rem] bg-[#F4F4F4] mx-20">
      <div className="flex flex-row ">
        <div className="w-[177px] h-[60px]  pt-4 ml-10">
          <img
            src={Footerlogo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className=" bg-[#F4F7FF] border border-[#D9E5FF] flex gap-2 p-3 items-center justify-center h-[2rem] mt-6 ">
          <p className=" text-sm font-semibold">Email id</p>
          <p className=" text-sm font-semibold text-[#377DFF]">
            contact@yodaplus.com
          </p>
        </div>
        <div className=" mt-6 ml-14">
          <Navbar />
        </div>
      </div>
      <div className="border-b w-full border-[#C3C3C3] mt-5 mb-3"></div>
      <div className="flex items-center justify-center mt-4">
        <p className=" text-[10px]">
          © 2023 – Yodaplus Technologies Private Limited. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

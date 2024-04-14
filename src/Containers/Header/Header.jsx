import React from "react";
import logo from "../../Assets/Logo.png";
import Navbar from "../../components/Navbar/Navbar";
import Headerimg from "../../Assets/Headerimg.png";

const Header = () => {
  return (
    <div className="flex flex-row h-[41.8rem]">
      <div className=" bg-[#EDEDDD] w-[80rem]">
        <div className=" flex flex-col items-start space-y-20">
          <div className="w-[177px] h-[53.52px]  pt-4 ml-40">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className=" ml-44">
              <p className=" text-[50px]">Making Trade Documents Digital</p>
            </div>
            <div className=" ml-44 mt-2">
              <p className=" text-[20px]">
                Secure and streamline your trade document management with our
                platform — where top-tier security meets efficiency for a
                sustainable business future.
              </p>
            </div>
            <button className=" w-[156px] h-[48px] rounded-md bg-[#0F7350] text-white ml-44 mt-14">
              Let's Start
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-[#78BFA3] w-full">
        <div className=" mt-4 lg:mx-10 ">
          <Navbar />
        </div>
        <div className=" w-[30rem] h-[40rem] ml-16">
          <img
            src={Headerimg}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

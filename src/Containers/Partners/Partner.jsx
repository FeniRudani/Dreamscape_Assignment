import React from "react";
import ICC from "../../Assets/ICC.png";
import UN from "../../Assets/UN.png";
import TT from "../../Assets/TT.png";
import Xtc from "../../Assets/Xtc.png";

const Partner = () => {
  return (
    <div className="my-24 items-center justify-center flex flex-col">
      <p className="text-[34px] font-semibold">Partners</p>
      <div className="flex items-center justify-center mt-10 gap-7">
        <div className="flex flex-col">
          <p className="text-xl font-semibold">Compliances</p>
          <div className="flex flex-row gap-7 mt-5">
            <img
              src={ICC}
              alt="partners"
              className="h-[74px] w-[111px] object-fill border border-[#DBDBDB] p-2"
            />

            <img
              src={UN}
              alt="partners"
              className="h-[74px] w-[241px] object-fill border border-[#DBDBDB]"
            />
          </div>
        </div>

        <div className="border border-[#DBDBDB] h-[7rem] mx-8 mt-2"></div>

        <div className="flex flex-col">
          <p className="text-xl font-semibold">Partners</p>
          <div className="flex flex-row gap-7 mt-5">
            <img
              src={TT}
              alt="partners"
              className="h-[74px] w-[130px] object-fill border border-[#DBDBDB] p-2"
            />

            <img
              src={Xtc}
              alt="partners"
              className="h-[74px] w-[230px] object-fill border border-[#DBDBDB]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;

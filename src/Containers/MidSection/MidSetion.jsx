import React from "react";
import Revolve from "../../Assets/Revolve.png";

const MidSetion = () => {
  return (
    <div className="relative my-24 items-center justify-center flex">
      <div className="w-[68.75rem] relative">
        <img src={Revolve} alt="Revolve" className="w-full object-contain" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center justify-center">
          <p className="text-[34px] font-semibold">
            Revolutionizing Global Trade with Secure Digital Documentation
          </p>
          <p className=" mt-3">
            DocuTrade transforms global trade by digitizing documents via
            blockchain, enhancing digital trust and efficiency across logistics
            and trade finance. Our platform caters to corporates, governments,
            and regulatory bodies, ensuring secure, compliant data transfer
            worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidSetion;

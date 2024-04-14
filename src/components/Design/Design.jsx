import React from "react";

const Design = () => {
  return (
    <div
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 4rem)",
        gridTemplateRows: "repeat(3, 4rem)",
      }}
    >
      <div className="bg-[#FFAF9A]"></div>
      <div className="bg-[#FFAF9A]"></div>
      <div className="bg-[#E3E3D3] relative">
        <div className="absolute top-[calc(-14px)] left-[calc(-5px)]"> + </div>
        <div className="absolute top-[calc(-14px)] right-[calc(-5px)]"> + </div>
      </div>
      <div className="bg-[#FFAF9A]"></div>
      <div className="bg-[#E3E3D3] relative">
        <div className="absolute top-[calc(-14px)] left-[calc(-5px)]"> + </div>
        <div className="absolute top-[calc(-14px)] right-[calc(-5px)]"> + </div>
      </div>
      <div className="bg-[#FFAF9A]"></div>
      <div className="bg-[#FFAF9A]"></div>
      <div className="bg-[#E3E3D3] relative">
        <div className="absolute top-[calc(-14px)] left-[calc(-5px)]"> + </div>
        <div className="absolute top-[calc(-14px)] right-[calc(-5px)]"> + </div>
      </div>
      <div className="bg-[#FFAF9A]"></div>
      <div className="bg-[#E3E3D3] relative">
        <div className="absolute top-[calc(-14px)] left-[calc(-5px)]"> + </div>
        <div className="absolute top-[calc(-14px)] right-[calc(-5px)]"> + </div>
      </div>
      <div className="bg-[#FFAF9A]"></div>
      <div className="bg-[#E3E3D3] relative">
        <div className="absolute top-[calc(-14px)] left-[calc(-5px)]"> + </div>
        <div className="absolute top-[calc(-14px)] right-[calc(-5px)]"> + </div>
        <div className="absolute bottom-[calc(-10px)] right-[calc(-5px)]">
          {" "}
          +{" "}
        </div>
      </div>
      <div className="bg-[#E3E3D3] relative">
        <div className="absolute top-[calc(-14px)] left-[calc(-5px)]"> + </div>
        <div className="absolute top-[calc(-14px)] right-[calc(-5px)]"> + </div>
      </div>
      <div className="bg-[#FFAF9A] "></div>
      <div className="bg-[#E3E3D3] relative">
        <div className="absolute top-[calc(-14px)] left-[calc(-5px)]"> + </div>
        <div className="absolute top-[calc(-14px)] right-[calc(-5px)]"> + </div>
      </div>
      <div className="bg-[#FFAF9A]"></div>
      <div className="bg-[#E3E3D3] relative">
        <div className="absolute top-[calc(-14px)] left-[calc(-5px)]"> + </div>
        <div className="absolute top-[calc(-14px)] right-[calc(-5px)]"> + </div>
      </div>
      <div className="bg-[#FFAF9A]"></div>
      <div className="bg-[#FFAF9A] "></div>
    </div>
  );
};

export default Design;

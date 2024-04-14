import React from "react";
import faeture from "../../Assets/feature.png";
import Lines from "../../components/Lines/Lines";
import Fraud from "../../Assets/Fraud.png";
import feature3 from "../../Assets/feature3.png";

const Features = () => {
  return (
    <div className=" my-24">
      <div className="flex flex-col items-center justify-center">
        <p className=" font-semibold  text-[40px] ">
          Our Solution's Key Features
        </p>
        <div className=" w-[40rem]">
          <p className=" text-[16px] text-center">
            Streamline your trade document processing with DocuTrade.
            Revolutionize how you manage, create, and transfer titles using our
            blockchain technology. Ensure document authenticity, maintain secure
            audit logs, and uphold confidentiality with every transaction.
          </p>
        </div>
      </div>

      <div className="flex flex-row  w-[68.75rem] justify-between mt-10 mx-20">
        <div className="bg-[#FFAF9A] flex flex-col w-[19.75rem] h-[20rem]">
          <div className=" w-[11.5rem] h-[3.5rem] mt-5 ml-12">
            <img
              src={faeture}
              alt="feature"
              className=" object-contain h-full"
            />
          </div>
          <p className=" font-semibold text-[1.5rem] ml-12 mt-5">
            Digital Document Management
          </p>
          <p className=" text-sm ml-12 mt-2 text-[#163F5B]">
            And then go to detail page for different use cases
          </p>
          <div className=" mt-6">
            <Lines />
          </div>
        </div>

        <div className="bg-[#F8E9B2] flex flex-col w-[19.75rem] h-[20rem] ">
          <div className=" w-[12rem] h-[3rem] mt-7 ml-12">
            <img src={Fraud} alt="feature" className=" object-contain h-full" />
          </div>
          <p className=" font-semibold text-[1.5rem] ml-12 mt-5">
            Fraud Mitigation
          </p>
          <p className=" text-sm ml-12 mt-2 text-[#163F5B] mr-3">
            Here it will talk about our security and tech - and go to detailed
            page about technology
          </p>
          <div className=" mt-9">
            <Lines />
          </div>
        </div>

        <div className="bg-[#D6E8F3] flex flex-col w-[19.75rem] h-[20rem]">
          <div className=" w-[12rem] h-[3.5rem] mt-7 ml-12">
            <img
              src={feature3}
              alt="feature"
              className=" object-contain h-full"
            />
          </div>
          <p className=" font-semibold text-[1.5rem] ml-12 mt-5">
            Interoperability
          </p>
          <p className=" text-sm ml-12 mr-3 mt-2 text-[#163F5B]">
            This is talk about our compliances and how we are working on more
            and will have logos of different bodies like UNCITRAL, ICC etc - CTA
            to compliances page
          </p>
          <div className="">
            <Lines />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

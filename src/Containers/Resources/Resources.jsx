import React from "react";
import Resources1 from "../../Assets/Resouces1.png";
import Resources2 from "../../Assets/Resources2.png";
import Resource3 from "../../Assets/Resource3.png";
import Design from "../../components/Design/Design.jsx";

const Resources = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-[68.75rem] mx-20 my-24">
      <p className=" font-semibold  text-[40px] mb-10 ">Resources</p>
      <div className="container grid grid-cols-2">
        <div className="flex flex-col bg-[#FFAF9A]  px-12 pt-12  ">
          <div className="relative w-[28rem] h-[14rem] ">
            <img
              src={Resources1}
              alt="Resource"
              className="w-full object-fit  h-full"
            />

            <div className="absolute bottom-0 left-0 p-2 bg-[#D6E8F3] rounded-tr">
              <h2 className="text-sm font-medium">Case Studies</h2>
            </div>
          </div>
          <p className=" mt-7 font-bold text-xl">
            How we built a Warehouse Management platform to replace the SAP
            based system
          </p>

          <div className="mt-7   border-b border-[#F28C72]"></div>
          <p className=" mt-7 text-sm">
            Exclusive Marketplace Launched to Facilitate Responsible, Innovative
            Growth of Next-Gen Nutraceuticals
          </p>
          <div className="mt-7   border-b border-[#F28C72]"></div>
          <p className=" mt-7 text-sm">
            Convergence with DeFi Enabled TradeFinex to Fuel a Continuous Cycle
            of Trade Financing
          </p>
          <div className="mt-7  border-b border-[#F28C72]"></div>
          <p className=" mt-7 text-sm">
            Optimizing Supply Chain Logistics for a Major Retail Chain in India
          </p>
          <div className="mt-7  border-b border-[#F28C72]"></div>
          <p className=" mt-7 text-sm">
            Convergence with DeFi Enabled TradeFinex to Fuel a Continuous Cycle
            of Trade Financing
          </p>
          <button className=" h-[2.875rem] w-[17.12rem] rounded-md bg-[#0F7350] text-white mt-14">
            Read more Case Studies
          </button>
          <div className=" mt-60">
            <Design />
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className=" flex flex-col p-12 px-14 bg-[#DEE7EF]">
            <div className="relative w-[28rem] h-[14rem]">
              <img
                src={Resources2}
                alt="Resource"
                className="w-full object-fit  h-full"
              />

              <div className="absolute bottom-0 left-0 p-2 bg-[#F7E6A7] rounded-tr">
                <h2 className="text-sm font-medium">Blogs</h2>
              </div>
            </div>

            <p className=" mt-4 font-bold text-xl">
              UNCITRAL-MLETR: A Catalyst for Trade Finance Modernization
            </p>

            <div className="mt-4   border-b border-[#E0E0E0]"></div>
            <p className=" mt-4 text-sm">
              {
                "Generative AI in Business: A Paradigm Shift That’s Here to Stay"
              }
            </p>
            <div className="mt-4  border-b border-[#E0E0E0]"></div>
            <p className=" mt-4 text-sm">
              Electronic invoices can be processed in one-fifth the time of
              paper invoices
            </p>
            <button className=" h-[2.875rem] w-[14rem] rounded-md bg-[#0F7350] text-white mt-7">
              Read more Blogs
            </button>
          </div>
          <div className=" flex flex-col p-12 px-14 bg-[#F0F0DF]">
            <div className="relative w-[28rem] h-[14rem] ">
              <img
                src={Resource3}
                alt="Resource"
                className="w-full object-fit  h-full"
              />

              <div className="absolute bottom-0 left-0 p-2 bg-[#FFAF9A] rounded-tr">
                <h2 className="text-sm font-medium">News</h2>
              </div>
            </div>
            <p className=" mt-3 font-bold text-xl">
              Yodaplus's DocuTrade at the Forefront of the Trade Finance
              Evolution - MarketWatch
            </p>
            <div className="mt-4  border-b border-[#E0E0E0]"></div>
            <p className=" mt-4 text-sm">
              Yodaplus DocuTrade: Transforming Trade Finance with
              MLETR-Compliant Documentation
            </p>
            <div className="mt-4  border-b border-[#E0E0E0]"></div>
            <p className=" mt-4 text-sm">
              Electronic invoices can be processed in one-fifth the time of
              paper invoices
            </p>
            <button className=" h-[2.875rem] w-[14rem] rounded-md bg-[#0F7350] text-white mt-7">
              Read more Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;

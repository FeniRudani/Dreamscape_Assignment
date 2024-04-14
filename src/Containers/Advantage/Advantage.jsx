import React from "react";
import Cost from "../../Assets/Cost.png";
import Adv2 from "../../Assets/Adv2.png";
import Adv3 from "../../Assets/Adv3.png";
import Adv4 from "../../Assets/Adv4.png";
import Adv5 from "../../Assets/Adv5.png";
import Adv6 from "../../Assets/Adv6.png";
import Adv7 from "../../Assets/Adv7.png";
import Adv8 from "../../Assets/Adv8.png";

const features = [
  {
    img: require("../../Assets/Cost.png"),
    title: "Cost Savings",
    description:
      "An electronic bill of lading could save $6B billion in direct costs and enable $40 billion in global trade (McKinsey).",
  },
  {
    img: require("../../Assets/Adv2.png"),
    title: "Speed and Efficiency",
    description:
      "Electronic invoices can be processed in one-fifth the time of paper invoices (Capgemini)",
  },
  {
    img: require("../../Assets/Adv3.png"),
    title: "Eco-conscious",
    description:
      "Digital transition reduces paper waste and physical storage needs.",
  },
  {
    img: require("../../Assets/Adv4.png"),
    title: "Assured Compliance",
    description:
      "Digitized documents in line with UNCITRAL-MLETR's recommendations.",
  },
  {
    img: require("../../Assets/Adv5.png"),
    title: "Enhanced Transparency",
    description: "Traceable, verifiable digital trade processes bolster trust.",
  },
  {
    img: require("../../Assets/Adv6.png"),
    title: "Strengthened Trade Bonds",
    description:
      "Digital transition reduces paper waste and physical storage needs.",
  },
  {
    img: require("../../Assets/Adv7.png"),
    title: "Assured Compliance",
    description: "Traceable, verifiable digital trade processes bolster trust.",
  },
  {
    img: require("../../Assets/Adv8.png"),
    title: "Blockchain Verification",
    description:
      "Digital transition reduces paper waste and physical storage needs.",
  },
];

const Advantage = () => {
  return (
    <div className=" my-24">
      <div className="flex flex-col items-center justify-center">
        <p className=" font-semibold  text-[40px] text-[#163F5B] ">
          The DocuTrade Advantage
        </p>
        <div className="container grid grid-cols-4 grid-rows-2 content-center  w-[68.75rem] mt-10 mx-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#13204D] p-6 py-10 border border-black"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-12 h-12 mb-4"
              />
              <p className="text-lg font-semibold text-white">
                {feature.title}
              </p>
              <p className="text-gray-300 mt-3 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantage;

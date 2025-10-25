import React from "react";

const CatigoresCardsProps = ({ img, title, description }) => {
  return (
    <div className="group bg-white rounded-xl x hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2 w-[260px]">
      <div className=" w-full ">
        <img src={img} alt={title} className="w-full" />
      </div>

      <div className="p-2 bg-[#03081F]">
        <h1 className="text-[#FC8A06] text-[18px] font-Poppins font-semibold  group-hover:text-[#FC8A06] transition-colors duration-300">
          {title}
        </h1>
        <p className="text-gray-500 text-[14px] leading-tight font-Poppins">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CatigoresCardsProps;

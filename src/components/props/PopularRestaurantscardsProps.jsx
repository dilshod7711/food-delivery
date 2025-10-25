import React from "react";

const PopularRestaurantscardsProps = ({ img, title }) => {
  return (
    <div className=" transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2">
      <img src={img} alt="" />

      <div className="p-4 bg-[#03081F] rounded-b-xl ">
        <h1 className="text-[#FC8A06] text-[14px] font-Poppins font-semibold  ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PopularRestaurantscardsProps;

import React from "react";

const AboutCardsProps = ({ img, title, description }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-2 flex flex-col items-center justify-center text-center h-[250px] w-[200px] cursor-pointer hover:-translate-y-2">
      <img
        className=" object-contain group-hover:scale-110 transition-transform duration-500"
        src={img}
        alt={title}
      />
      <h1 className="text-[20px] font-semibold font-Poppins text-[#03081F] mb-2 group-hover:text-[#FC8A06] transition-colors duration-300">
        {title}
      </h1>
      <p className="text-[15px] text-gray-600 font-Poppins leading-tight">
        {description}
      </p>
    </div>
  );
};

export default AboutCardsProps;

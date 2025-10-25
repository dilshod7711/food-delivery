import React from "react";
import { about } from "../../api/api";
import AboutCardsProps from "../props/AboutCardsProps";
const About = () => {
  return (
    <section className="container mt-[50px]">
      <div className="bg-[#D9D9D9] w-full h-[800px] rounded-xl py-[100px] px-[50px]">
        <div className="flex justify-between items-center">
          <p className="text-[32px] text-[#000000] font-Poppins font-bold">
            Know more about us!
          </p>
          <div className="flex gap-4 items-center justify-center">
            <p className="hover:text-[#FC8A06] cursor-pointer text-[#000000] text-[16px] font-Poppins hover:border-1 border-[#FC8A06] px-4 py-1 rounded-2xl transform transition duration-500  ">
              Frequent Questions
            </p>
            <p className="hover:text-[#FC8A06] cursor-pointer text-[#000000] text-[16px] font-Poppins hover:border-1 border-[#FC8A06] px-4 py-1 rounded-2xl transform transition duration-500  ">
              Who we are?
            </p>
            <p className="hover:text-[#FC8A06] cursor-pointer text-[#000000] text-[16px] font-Poppins hover:border-1 border-[#FC8A06] px-4 py-1 rounded-2xl transform transition duration-500  ">
              Partner Program
            </p>
            <p className="hover:text-[#FC8A06] cursor-pointer text-[#000000] text-[16px] font-Poppins hover:border-1 border-[#FC8A06] px-4 py-1 rounded-2xl transform transition duration-500  ">
              Help & Support
            </p>
          </div>
        </div>
        <div className="bg-[#03081F] h-[526px] mt-[50px] flex px-10 gap-10 rounded-xl items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-8">
            <button className="h-[60px] bg-[#FC8A06] text-[18px] font-bold font-Poppins rounded-full w-[346px] ">
              How does Order.UK work?
            </button>
            <p className="text-[#FFFFFF] text-[18px] font-bold font-Poppins">
              What payment methods are accepted?
            </p>
            <p className="text-[#FFFFFF] text-[18px] font-bold font-Poppins">
              Can I track my order in real-time?
            </p>
            <p className="text-[#FFFFFF] text-[18px] font-bold font-Poppins max-w-[303px] text-center">
              Are there any special discounts orpromotions available?
            </p>
            <p className="text-[#FFFFFF] text-[18px] font-bold font-Poppins">
              Is Order.UK available in my area?
            </p>
          </div>
          <div className="w-[0.2px] h-[526px] bg-gray-100"></div>
          <div className="container mx-auto mt-[50px]">
            <div className="flex flex-wrap justify-center gap-4">
              {about.map((item) => (
                <AboutCardsProps key={item.id} {...item} />
              ))}
              <p className="text-center text-[16px] text-[#FFFFFF] font-Poppins">
                Order.UK simplifies the food ordering process. Browse through
                our diverse menu, select your favorite dishes, and proceed to
                checkout. Your delicious meal will be on its way to your
                doorstep in no time!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FC8A06] w-full h-[150px] mt-[50px] rounded-2xl flex items-center justify-center gap-8">
        <div className="flex flex-col items-center ">
          <h1 className="text-[60px] font-bold text-[#FFFFFF]">546+</h1>
          <p className="text-[24px] font-bold text-[#FFFFFF]">
            Registered Riders
          </p>
        </div>
        <div className="w-[1px] h-[100px] bg-gray-100"></div>
        <div className="flex flex-col items-center ">
          <h1 className="text-[60px] font-bold text-[#FFFFFF]">789,900++</h1>
          <p className="text-[24px] font-bold text-[#FFFFFF]">
            Orders Delivered
          </p>
        </div>
        <div className="w-[1px] h-[100px] bg-gray-100"></div>
        <div className="flex flex-col items-center ">
          <h1 className="text-[60px] font-bold text-[#FFFFFF]">690++</h1>
          <p className="text-[24px] font-bold text-[#FFFFFF]">
            Restaurants Partnered
          </p>
        </div>
        <div className="w-[1px] h-[100px] bg-gray-100"></div>
        <div className="flex flex-col items-center ">
          <h1 className="text-[60px] font-bold text-[#FFFFFF]">17,457++</h1>
          <p className="text-[24px] font-bold text-[#FFFFFF]">Food items</p>
        </div>
      </div>
    </section>
  );
};

export default About;

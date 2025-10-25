import React from "react";
import shadoww from "../../assets/imgs/shadow2.png";
import partner from "../../assets/imgs/partner.png";
import ride from "../../assets/imgs/ride.png"

const Partner = () => {
  return (
    <section className="container mt-[50px] flex  gap-4">
      <div className="">
        <div className="relative">
          <img className="relative z-50" src={shadoww} alt="" />
          <img className="absolute top-0 left-0 z-10" src={partner} alt="" />
          <div className="absolute  bottom-6 z-50 left-8 flex flex-col gap-2 ">
            <div>
              <h1 className="text-[18px] text-[#FC8A06] font-Poppins ">
                Signup as a business
              </h1>
              <h1 className="text-[44px] text-[#FFFFFF] font-Poppins  font-bold">
                Partner with us
              </h1>
            </div>
            <button className="text-[18px] text-[#FFFFFF] font-Poppins font-medium bg-[#FC8A06] w-[170px] h-[50px] rounded-full">
              Get Started
            </button>
          </div>
          <span className=" text-[18px]  bg-amber-50 px-3 py-2 rounded-b-md absolute top-0 start-[50px] z-50 ">
            Earn more with lower fees
          </span>
        </div>
      </div>
      <div className="">
        <div className="relative">
          <img className="relative z-50" src={shadoww} alt="" />
          <img className="absolute top-0 left-0 z-10" src={ride} alt="" />
          <div className="absolute  bottom-6 z-50 left-8 flex flex-col gap-2 ">
            <div>
              <h1 className="text-[18px] text-[#FC8A06] font-Poppins ">
                Signup as a rider
              </h1>
              <h1 className="text-[44px] text-[#FFFFFF] font-Poppins  font-bold">
                Ride with us
              </h1>
            </div>
            <button className="text-[18px] text-[#FFFFFF] font-Poppins font-medium bg-[#FC8A06] w-[170px] h-[50px] rounded-full">
              Get Started
            </button>
          </div>
          <span className=" text-[18px]  bg-amber-50 px-3 py-2 rounded-b-md absolute top-0 start-[50px] z-50 ">
            Avail exclusive perks
          </span>
        </div>
      </div>
    </section>
  );
};

export default Partner;

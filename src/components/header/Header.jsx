import React from "react";
import fullShop from "../../assets/imgs/fullShop.svg";
import arrow from "../../assets/imgs/arrow.svg";
import location from "../../assets/imgs/Location.svg";
import Order from "../../assets/imgs/Order.svg";
import user from "../../assets/imgs/user.svg";
const Header = () => {
  return (
    <header className="container  ">
      <div className="flex justify-between items-center bg-[#FAFAFA] border-1 border-[#0000001A]  rounded-b-xl">
        <div className="flex gap-1 items-center justify-center ml-[20px]">
          <span>🌟</span>
          <p className="text-[15px] text-[#000000] font-Poppins">
            Get 5% Off your first order,
            <span className="text-[#FC8A06] border-b cursor-pointer">
              Promo: ORDER5
            </span>
          </p>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <div className="flex gap-4">
            <img src={location} alt="" />
            <p className="text-[15px] text-[#000000] font-Poppins">
              Regent Street, A4, A4201, London
            </p>
            <span className="text-[15px] text-[#FC8A06] border-b cursor-pointer font-Poppins">
              Change Location
            </span>
          </div>
          <div className="w-[378px] h-[70px] bg-[#028643] rounded-b-xl border border-[#0000001A] flex justify-between items-center px-[23px] text-white font-Poppins font-semibold">
            <div className="flex items-center h-full gap-2">
              <img src={fullShop} alt="" />
            </div>

            <div className="w-[1px] h-full bg-white/40"></div>

            <div className="flex items-center h-full">
              <p>Items</p>
            </div>

            <div className="w-[1px] h-full bg-white/40"></div>

            <div className="flex items-center h-full">
              <p>GBP 79.89</p>
            </div>

            <div className="w-[1px] h-full bg-white/40"></div>

            <div className="flex items-center h-full">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <nav className="flex justify-between items-center mt-[38px]">
        <img src={Order} alt="" />
        <div className="flex items-center justify-center gap-[50px]">
          <ul className="flex items-center justify-center gap-[40px]">
            <li>
              <a
                href="#"
                className="hover:bg-[#FC8A06] active:bg-[#FC8A06] p-2 rounded-xl hover:text-white active:text-white transform hover:scale-110 active:scale-105 transition duration-300 ease-in-out font-Poppins font-medium text-[18px] leading-100%"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#FC8A06] active:bg-[#FC8A06] p-2 rounded-xl hover:text-white active:text-white transform hover:scale-110 active:scale-105 transition duration-300 ease-in-out font-Poppins font-medium text-[18px] leading-100%"
                href=""
              >
                Browse Menu
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#FC8A06] active:bg-[#FC8A06] p-2 rounded-xl hover:text-white active:text-white transform hover:scale-110 active:scale-105 transition duration-300 ease-in-out font-Poppins font-medium text-[18px] leading-100%"
                href=""
              >
                Special Offers
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#FC8A06] active:bg-[#FC8A06] p-2 rounded-xl hover:text-white active:text-white transform hover:scale-110 active:scale-105 transition duration-300 ease-in-out font-Poppins font-medium text-[18px] leading-100%"
                href=""
              >
                Restaurants
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#FC8A06] active:bg-[#FC8A06] p-2 rounded-xl hover:text-white active:text-white transform hover:scale-110 active:scale-105 transition duration-300 ease-in-out font-Poppins font-medium text-[18px] leading-100%"
                href=""
              >
                Track Order
              </a>
            </li>
          </ul>
          <button className="flex items-center justify-center gap-2 bg-[#03081F] py-[17px] px-[23px] rounded-[120px] text-white cursor-pointer w-[234px]  font-Poppins font-medium text-[18px] leading-100%">
            <img src={user} alt="" />
            Login/Signup
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

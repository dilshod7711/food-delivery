import bgImg from "../../assets/imgs/heroBgf.png";
import girl from "../../assets/imgs/girl.png";
import orange from "../../assets/imgs/orange.png";
import shadowImg from "../../assets/imgs/shadowGil.png";
import order from "../../assets/imgs/Order.svg";

const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
      <div
        className="w-full min-h-[500px] sm:min-h-[550px] lg:h-[610px] bg-cover bg-center rounded-lg sm:rounded-xl flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-0 px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-0"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container flex justify-between">
          <div className="text-white w-full lg:w-auto lg:max-w-[480px] space-y-4 sm:space-y-6 text-center lg:text-left">
            <p className="text-sm sm:text-base lg:text-lg text-gray-300">
              Order Restaurant food, takeaway and groceries.
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Feast Your Senses,{" "}
              <span className="text-[#FC8A06]">Fast and Fresh</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              Enter a postcode to see what we deliver
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-2 mt-6 bg-white rounded-full overflow-hidden w-full sm:w-[340px] lg:w-[340px]">
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                className="px-4 py-3 w-full text-gray-700 outline-none text-sm sm:text-base"
              />
              <button className="bg-[#FC8A06] text-white font-semibold px-6 py-3 rounded-full whitespace-nowrap text-sm sm:text-base hover:bg-[#E67E00] transition-colors">
                Search
              </button>
            </div>
          </div>
          <div className="relative flex justify-between w-full">
            <img
              className="absolute top-0 z-50 top-[-70px] left-[-300px]  "
              src={shadowImg}
              alt=""
            />
            <img
              className="absolute top-0 z-50 top-[-90px] left-[40px]"
              src={girl}
              alt=""
            />
            <div>
              <img
                className="absolute top-[-114px] z-10 bottom-0 left-[219px]"
                src={orange}
                alt=""
              />
              <div className="absolute right-[-50px] top-[40px] space-y-6 z-20 flex flex-col gap-[50px]">
                <div className="bg-white shadow-lg rounded-xl px-5 py-3 w-[300px] mt-[-50px]   ml-[-150px]">
                  <img className="w-[60px]" src={order} alt="" />
                  <h3 className="font-bold text-gray-800">
                    We’ve received your order!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Awaiting Restaurant acceptance
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-xl px-5 py-3 w-[300px] flex flex-col gap-1">
                  <img className="w-[60px]" src={order} alt="" />
                  <h3 className="font-bold text-gray-800">Order Accepted ✅</h3>
                  <p className="text-gray-500 text-sm">
                    Your order will be delivered shortly
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-xl px-5 py-3 w-[300px]  ml-[-80px]">
                  <img className="w-[60px]" src={order} alt="" />
                  <h3 className="font-bold text-gray-800">
                    Your rider’s nearby 🚴‍♂️
                  </h3>
                  <p className="text-gray-500 text-sm">
                    They’re almost there — get ready!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

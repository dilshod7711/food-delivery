import friends from "../../assets/imgs/friends.png";
import order from "../../assets/imgs/Order.svg";
import app from "../../assets/imgs/app.svg";
const Personalised = () => {
  return (
    <section className="container mt-30 ">
      <div className="bg-[#E0E1DC] w-full h-[508px] rounded-xl relative flex justify-between items-center">
        <div className="absolute top-[-40px] left-2 z-50">
          <img className="w-[700px]" src={friends} alt="" />
        </div>
        <div className="absolute right-10 top-20 flex items-center justify-end flex-col gap-4">
          <div className="flex justify-center items-center  ml-[80px]">
            <div className="flex items-center justify-center gap-2">
              <img src={order} alt="" />
              <span className="text-[58px] font-bold font-Poppins text-[#03081F]">
                ing
              </span>
            </div>
            <p className="text-[58px] font-bold font-Poppins text-[#03081F]">
              is more{" "}
            </p>
          </div>
          <div className="w-[700px] h-[90px] bg-[#03081F] rounded-full flex items-right justify-end px-12">
            <button className="text-[44px] font-bold font-Poppins text-[#FC8A06] ">
              Personalised <span className="text-[#FFFFFF]">& Instant</span>
            </button>
          </div>
          <p className="text-[#000000] text-[24px] ml-[80px]">
            Download the Order.uk app for faster ordering
          </p>
          <div className="flex gap-8  ml-[80px]">
            <div className="bg-[#000000] rounded-lg p-3">
              <img src={app} alt="" />
            </div>
            <div className="bg-[#000000] rounded-lg p-3">
              <img src={app} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personalised;

import shadoww from "../../assets/imgs/shadoww.png";

const Cards = ({ img, title, description, sale }) => {
  return (
    <div className="">
      <div className="relative">
        <img className="relative z-50" src={shadoww} alt="" />
        <img className="absolute top-0 left-0 z-10" src={img} alt="" />
        <div className="absolute  bottom-6 z-50 left-8 flex flex-col gap-1">
          <h1 className="text-[18px] text-[#FC8A06] font-Poppins ">{title}</h1>
          <p className="text-[24px] text-[#FFFFFF] font-Poppins font-bold ">
            {description}
          </p>
        </div>
        <span className=" text-[18px] text-[#FFFFFF] bg-[#03081F] px-3 py-2 rounded-b-md absolute top-0 right-[20px] z-20 ">
          {sale}
        </span>
      </div>
    </div>
  );
};

export default Cards;

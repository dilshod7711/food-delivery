import { deals } from "../../api/api";
import Cards from "../cards/ExculiveDealsCardProps";
const ExclusiveDeals = () => {
  return (
    <section className="container mt-[20px]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#000000] text-[32px] font-Poppins">
            Up to -40% 🎊 Order.uk exclusive deals
          </p>
        </div>
        <div className="flex gap-12 items-center justify-center">
          <p className="hover:text-[#FC8A06] cursor-pointer text-[#000000] text-[16px] font-Poppins hover:border-1 border-[#FC8A06] px-4 py-1 rounded-2xl transform transition duration-500  ">
            Vegan{" "}
          </p>
          <p className="hover:text-[#FC8A06] cursor-pointer text-[#000000] text-[16px] font-Poppins hover:border-1 border-[#FC8A06] px-4 py-1 rounded-2xl transform transition duration-500  ">
            Sushi{" "}
          </p>
          <p className="hover:text-[#FC8A06] cursor-pointer text-[#000000] text-[16px] font-Poppins hover:border-1 border-[#FC8A06] px-4 py-1 rounded-2xl transform transition duration-500  ">
            Pizza & Fast food
          </p>
          <p className="hover:text-[#FC8A06] cursor-pointer text-[#000000] text-[16px] font-Poppins hover:border-1 border-[#FC8A06] px-4 py-1 rounded-2xl transform transition duration-500  ">
            others
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-[30px]">
        {deals.map((deal) => (
          <Cards key={deal.id} {...deal} />
        ))}
      </div>
    </section>
  );
};

export default ExclusiveDeals;

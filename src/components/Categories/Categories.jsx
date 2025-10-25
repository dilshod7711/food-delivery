import React from "react";
import { categories } from "../../api/api";
import Cards from "../props/CatigoresCardsProps";

const Categories = () => {
  return (
    <section className="container mx-auto mt-[50px] px-4">
      <div className="mb-10">
        <h2 className="text-[#000000] text-[32px] font-Poppins font-bold">
          Order.uk Popular Categories 🤩
        </h2>
      </div>

      <div className="flex  justify-center gap-4">
        {categories.map((item) => (
          <Cards key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Categories;

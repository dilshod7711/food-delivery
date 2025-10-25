import Cards from "../props/PopularRestaurantscardsProps";
import { Restaurant } from "../../api/api";
const PopularRestaurants = () => {
  return (
    <section className="container mt-[40px]">
      <h2 className="text-[#000000] text-[32px] font-Poppins font-bold">
        Popular Restaurants
      </h2>
      <div className="flex gap-4 mt-8">
        {Restaurant.map((item) => (
          <Cards key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PopularRestaurants;

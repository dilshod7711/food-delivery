import ExclusiveDeals from "./components/exclusiveDeals/ExclusiveDeals";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Categories from "./components/Categories/Categories";
import PopularRestaurants from "./components/PopularRestaurants/PopularRestaurants";
import Personalised from "./components/Personalised/Personalised";
import Partner from "./components/Partner/Partner";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ExclusiveDeals />
      <Categories />
      <PopularRestaurants />
      <Personalised />
      <Partner />
      <About/>
    </>
  );
}

export default App;

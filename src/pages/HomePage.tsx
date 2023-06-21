import Hero from "../components/Hero";
import TitleCards from "../components/TitleCards";
import Food from "../components/Food";
import Category from "../components/Category";
import { useSelector } from "react-redux";
import { getFoods } from "../redux/slice/foodsSlice";
import { FoodItemType } from "../constants/foodData";

function HomePage() {
  const foods: FoodItemType[] | null = useSelector(getFoods);

  return (
    <>
      <Hero />
      <TitleCards />
      {foods && <Food foods={foods} />}
      <Category />
    </>
  );
}

export default HomePage;

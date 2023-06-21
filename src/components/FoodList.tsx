import { FoodItemType } from "../constants/foodData";
import FoodCart from "./FoodCard";

interface FoodListProps {
  foods: FoodItemType[];
}

function FoodList({ foods }: FoodListProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
      {foods.map((item) => (
        <FoodCart foodCartData={item} key={item.id} />
      ))}
    </div>
  );
}
export default FoodList;

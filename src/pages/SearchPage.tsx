import { useSelector } from "react-redux";
import { getFoundFoods } from "../redux/slice/searchFoodSlice";
import FoodList from "../components/FoodList";
import HeadLine from "../components/HeadLine";

function SearchPage() {
  const foundFoods = useSelector(getFoundFoods);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      {foundFoods.length > 0 ? (
        <FoodList foods={foundFoods} />
      ) : (
        <HeadLine text="No Food Found." />
      )}
    </div>
  );
}

export default SearchPage;

import { useState, useEffect } from "react";
import { filterType } from "../constants/constants";
import HeadLine from "./HeadLine";
import CustomButton from "./CustomButton";
import FoodList from "./FoodList";
import { FoodItemType } from "../constants/foodData";
import { useDispatch } from "react-redux";
import { filterByType, filterByPrice } from "../redux/slice/foodsSlice";

interface FoodProps {
  foods: FoodItemType[];
}

function Food({ foods }: FoodProps) {
  const dispatch = useDispatch();
  const [filterPrices, setFilterPrices] = useState<string[]>([]);

  useEffect(() => {
    const tempArr: string[] = [];
    foods.forEach(({ price }) => {
      if (!tempArr.includes(price)) {
        tempArr.push(price);
      }
      return setFilterPrices([...tempArr]);
    });
  }, [foods]);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <HeadLine text="Top Rated Menu Items" />
      {/* Filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex gap-3 flex-wrap ">
            {filterType.map((item) => (
              <CustomButton
                btnLabel={item}
                onClick={({ currentTarget: { value } }) =>
                  dispatch(filterByType(value))
                }
                key={item}
              />
            ))}
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex gap-3 flex-wrap ">
            {filterPrices.map((item) => (
              <CustomButton
                btnLabel={item}
                key={item}
                onClick={({ currentTarget: { value } }) =>
                  dispatch(filterByPrice(value))
                }
              />
            ))}
          </div>
        </div>
      </div>
      <FoodList foods={foods} />
    </div>
  );
}

export default Food;

import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FoodItemType } from "../constants/foodData";
import { useDispatch } from "react-redux";
import { incrementItemQuantity } from "../redux/slice/cartSlice";
import LazyImage from "./LazyImage";

interface FoodCardProps {
  foodCartData: FoodItemType;
}

function FoodCard({ foodCartData }: FoodCardProps) {
  const { id, name, image, price } = foodCartData;
  const [isDisplayAdd, setIsDisplayAdd] = useState(false);

  const dispatch = useDispatch();

  const displayAdd = () => {
    setIsDisplayAdd(true);
  };
  const hideAdd = () => {
    setIsDisplayAdd(false);
  };
  const clickHandler = () => {
    dispatch(incrementItemQuantity(foodCartData));
  };

  return (
    <div
      className="shadow-lg rounded-lg hover:scale-105 hover:duration-500 relative"
      key={id}
      onMouseEnter={displayAdd}
      onMouseLeave={hideAdd}
    >
      <LazyImage src={image} alt={name} height={"h-[200px]"} />

      <div className="flex justify-between px-2 py-4">
        <p className="font-bold">{name}</p>
        <p>
          <span className="bg-orange-500 text-white inline-block text-center w-[60px] p-1  rounded-full">
            {price}
          </span>
        </p>
      </div>

      {isDisplayAdd && (
        <div
          onClick={clickHandler}
          className="left-[50%] translate-x-[-50%] bottom-[10%] absolute text-orange-500"
        >
          <AiFillPlusCircle size={72} />
        </div>
      )}
    </div>
  );
}

export default FoodCard;

import { useDispatch } from "react-redux";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import {
  CartItem,
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemFromCart,
} from "../redux/slice/cartSlice";
import CountButton from "./CountButton";

interface CartItemComponentProps {
  itemData: CartItem;
}
function CartItemComponent({ itemData }: CartItemComponentProps) {
  const { food, quantity, total } = itemData;
  const dispatch = useDispatch();

  const incrementQty = () => {
    dispatch(incrementItemQuantity(food));
  };

  const decrementQty = () => {
    if (quantity > 1) {
      dispatch(decrementItemQuantity(food));
    } else {
      removeItem();
    }
  };
  const removeItem = () => {
    dispatch(removeItemFromCart(food.id));
  };

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center  border-b border-gray-500 py-4">
      <div className="w-[300px]">
        <img
          className="w-full h-[250px] object-cover rounded-t-lg"
          src={food.image}
          alt={food.name}
        />
        <div className="flex justify-between px-2 py-4">
          <p className="font-bold">{food.name}</p>
          <p>
            <span className="bg-orange-500 text-white inline-block text-center w-[60px] p-1  rounded-full">
              {food.price}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-row border border-gray-500 mb-4 sm:mb-0 ">
        <CountButton countOperation={decrementQty} btnLabel={<BiMinus />} />
        <p className="min-w-[40px] font-bold text-xl text-center border border-gray-500">
          {quantity}
        </p>
        <CountButton countOperation={incrementQty} btnLabel={<BiPlus />} />
      </div>
      <div className="flex items-center gap-1">
        <p className="font-bold text-xl">{total}$</p>
        <FiTrash2
          size={22}
          className="hover:text-orange-500"
          onClick={removeItem}
        />
      </div>
    </div>
  );
}

export default CartItemComponent;

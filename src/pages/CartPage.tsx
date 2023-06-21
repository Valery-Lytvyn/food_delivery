import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, clearCart, getCartItems } from "../redux/slice/cartSlice";
import CartItemComponent from "../components/CartItemComponent";
import CustomButton from "../components/CustomButton";
import HeadLine from "../components/HeadLine";
import { CLEAR_BUTTON_LABEL, TOTAL_LABEL } from "../constants/constants";

function CartPage() {
  const productsInCart: CartItem[] = useSelector(getCartItems);
  const [purchaseAmount, setPurchaseAmount] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const sum = productsInCart.reduce(function (acc, obj) {
      return acc + obj.total;
    }, 0);
    setPurchaseAmount(sum);
  }, [productsInCart]);

  const removeAllItem = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 ">
      {productsInCart != undefined && productsInCart.length > 0 ? (
        <div>
          {productsInCart.map((item) => (
            <CartItemComponent itemData={item} key={item.food.id} />
          ))}
          <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between  my-4 ">
            <CustomButton
              btnLabel={CLEAR_BUTTON_LABEL}
              onClick={removeAllItem}
            />
            <p className="font-bold text-2xl p-4">
              {TOTAL_LABEL}
              <span className="pl-2">{purchaseAmount}$</span>
            </p>
          </div>
        </div>
      ) : (
        <HeadLine text="Your Cart Is Empty." />
      )}
    </div>
  );
}

export default CartPage;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FoodItemType } from "../../constants/foodData";
import { totalCalc } from "../../services/services";

export interface CartItem {
  food: FoodItemType;
  quantity: number;
  total: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementItemQuantity: (state, action: PayloadAction<FoodItemType>) => {
      const food = action.payload;
      const existingItemIndex = state.findIndex(
        (item) => item.food.id === food.id
      );
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
        const total = totalCalc(
          +food.price.slice(0, -1),
          state[existingItemIndex].quantity
        );
        state[existingItemIndex].total = total;
      } else {
        const quantity = 1;
        const total = totalCalc(+food.price.slice(0, -1), quantity);
        state.push({ food, quantity, total });
      }
    },
    decrementItemQuantity: (state, action: PayloadAction<FoodItemType>) => {
      const { id, price } = action.payload;
      const itemIndex = state.findIndex((item) => item.food.id === id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity -= 1;

        const total = totalCalc(+price.slice(0, -1), state[itemIndex].quantity);
        state[itemIndex].total = total;
      }
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex(
        (item) => item.food.id === action.payload
      );
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },

    clearCart: (state) => {
      state.splice(0, state.length);
    },
  },
});

export interface Cart {
  cart: CartItem[];
}
export const getCartItems = (state: Cart): CartItem[] => state.cart;
export const {
  incrementItemQuantity,
  decrementItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

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
      const existingItem = state.find((item) => item.food.id === food.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = totalCalc(
          +food.price.slice(0, -1),
          existingItem.quantity
        );
      } else {
        const quantity = 1;
        const total = +food.price.slice(0, -1);
        state.push({ food, quantity, total });
      }
    },
    decrementItemQuantity: (state, action: PayloadAction<FoodItemType>) => {
      const { id, price } = action.payload;
      const existingItem = state.find((item) => item.food.id === id);
      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.total = totalCalc(
          +price.slice(0, -1),
          existingItem.quantity
        );
      }
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.forEach((item, index) => {
        if (item.food.id === action.payload) {
          state.splice(index, 1);
        }
      });
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

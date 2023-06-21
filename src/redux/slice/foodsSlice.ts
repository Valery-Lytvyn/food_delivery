import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FoodItemType, foodsData } from "../../constants/foodData";
import { ALL_CATEGORY } from "../../constants/constants";

const initialState: FoodItemType[] = foodsData;

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    filterByType: (_, action: PayloadAction<string>) => {
      const category = action.payload.toLowerCase();
      if (category === ALL_CATEGORY) {
        return initialState;
      } else {
        const filteredFoods = foodsData.filter((item: FoodItemType) => {
          return item.category === category;
        });
        return [...filteredFoods];
      }
    },
    filterByPrice: (_, { payload: price }: PayloadAction<string>) => {
      const filteredFoods = foodsData.filter((item: FoodItemType) => {
        return item.price === price;
      });
      return [...filteredFoods];
    },
  },
});

interface FoodsState {
  foods: FoodItemType[];
}
export const getFoods = (state: FoodsState): FoodItemType[] => state.foods;
export const { filterByType, filterByPrice } = foodsSlice.actions;
export default foodsSlice.reducer;

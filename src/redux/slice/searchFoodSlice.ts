import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FoodItemType, foodsData } from "../../constants/foodData";

const initialState: FoodItemType[] = [];

interface Foods {
  searchFood: FoodItemType[];
}

const searchFoodSlice = createSlice({
  name: "searchFood",
  initialState,
  reducers: {
    searchFoods: (_, { payload: searchRequest }: PayloadAction<string>) => {
      const foundFoods: FoodItemType[] = foodsData.filter(
        (item) =>
          item.name.includes(searchRequest) ||
          item.category.includes(searchRequest)
      );
      return [...foundFoods];
    },
  },
});

export const { searchFoods } = searchFoodSlice.actions;
export const getFoundFoods = (state: Foods) => state.searchFood;
export default searchFoodSlice.reducer;

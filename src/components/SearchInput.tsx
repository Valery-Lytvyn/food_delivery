import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { SEARCH_PLACEHOLDER } from "../constants/constants";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchFoods } from "../redux/slice/searchFoodSlice";
import { ROUTES } from "../routing/routes";

function SearchInput() {
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchItem(e.currentTarget.value);
  };

  const searchHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const searchRequest = searchItem.toLowerCase();
    dispatch(searchFoods(searchRequest));
    navigate(ROUTES.search);
    setSearchItem("");
  };
  return (
    <form
      onSubmit={searchHandler}
      className="bg-gray-200 rounded-full flex items-center px-2 max-w-[400px] sm:w-[400px] lg:w-[500px] hover:border hover:border-orange-500"
    >
      <input
        className="bg-transparent p-2 w-full focus:outline-none "
        type="text"
        placeholder={SEARCH_PLACEHOLDER}
        value={searchItem}
        onChange={inputHandler}
      />
      <button>
        <AiOutlineSearch size={20} className="hover:text-orange-500" />
      </button>
    </form>
  );
}

export default SearchInput;

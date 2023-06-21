import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

// NavBar
export const navBarList = [
  { icon: <TbTruckDelivery />, label: "Orders" },
  { icon: <MdFavorite />, label: "Favorites" },
  { icon: <FaWallet />, label: "Wallet" },
  { icon: <MdHelp />, label: "Help" },
  { icon: <AiFillTag />, label: "Promotions" },
  { icon: <BsFillSaveFill />, label: "Best Ones" },
  { icon: <FaUserFriends />, label: "Invite Friends" },
];

export const CART_BUTTON_LABEL = "Cart";
export const toggleBtnLabels = ["Delivery", "Pickup"];

// SearchInput
export const SEARCH_PLACEHOLDER = "Search food";

//Cart
export const CLEAR_BUTTON_LABEL = "Clear the shopping cart";
export const TOTAL_LABEL = "Total:";

//TitleCards
export const ORDER_BUTTON_LABEL = "Order Now";

export interface CardData {
  cardTitle: string;
  cardSubTitle: string;
  imgURL: string;
  imgAlt: string;
}
export const cardsInscriptions: Array<CardData> = [
  {
    cardTitle: "Sun's Out, BOGO's Out",
    cardSubTitle: "Through 8/26",
    imgURL:
      "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    imgAlt: "breakfast",
  },
  {
    cardTitle: "New Restaurants",
    cardSubTitle: "Added Daily",
    imgURL:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    imgAlt: "lunch",
  },
  {
    cardTitle: "We Deliver Desserts Too",
    cardSubTitle: "Tasty Treats",
    imgURL:
      "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    imgAlt: "desert",
  },
];

//Food
export const filterType = ["All", "Burger", "Pizza", "Salad", "Chicken"];
export const PRICE_BUTTON_ARIA_LABEL = "price";
export const ALL_CATEGORY = "all";

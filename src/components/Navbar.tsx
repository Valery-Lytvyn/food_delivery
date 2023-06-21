import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import HamburgerMenu from "./HamburgerMenu";
import { useMenu } from "../hooks/useMenu";
import SearchInput from "./SearchInput";
import ToggleButton from "./ToggleButton";
import { CART_BUTTON_LABEL, toggleBtnLabels } from "../constants/constants";
import { useToggle } from "../hooks/useToggle";
import { ROUTES } from "../routing/routes";

function Navbar() {
  const { isDisplayedMenu, showMenu, hideMenu } = useMenu();
  const { activeDelivery, clickHandler } = useToggle();

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center flex-wrap gap-4 p-4">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <div className="cursor-pointer" onClick={showMenu}>
          <AiOutlineMenu size={30} />
        </div>
        <Link to={ROUTES.index}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">
            Best <span className="font-bold">Eats</span>
          </h1>
        </Link>
        <ToggleButton
          activeDelivery={activeDelivery}
          clickHandler={clickHandler}
          btnLabels={toggleBtnLabels}
        />
      </div>
      <SearchInput />
      {/* Curt button */}
      <Link to={ROUTES.cart}>
        <button
          className="bg-orange-500 text-white flex gap-5 items-center py-2 rounded-full
        hover:bg-white hover:border hover:border-orange-500 hover:text-black"
        >
          <GiShoppingCart size={20} /> {CART_BUTTON_LABEL}
        </button>
      </Link>
      {isDisplayedMenu && (
        <HamburgerMenu isDisplayedMenu={isDisplayedMenu} hideMenu={hideMenu} />
      )}
    </div>
  );
}

export default Navbar;

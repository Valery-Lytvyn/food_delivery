import { AiOutlineClose } from "react-icons/ai";
import { navBarList } from "../constants/constants";

interface HamburgerMenuProps {
  isDisplayedMenu: boolean;
  hideMenu: () => void;
}

function HamburgerMenu({ isDisplayedMenu, hideMenu }: HamburgerMenuProps) {
  const navbarStyle =
    "fixed top-0 w-[300px] h-screen bg-white z-10 duration-300";

  return (
    <>
      {isDisplayedMenu && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      )}
      <div
        className={
          isDisplayedMenu
            ? `${navbarStyle} left-0`
            : `${navbarStyle} left-[-100%]`
        }
      >
        <AiOutlineClose
          onClick={hideMenu}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col  p-4 text-gray-800 ">
            {navBarList.map((item, index) => (
              <li className="text-xl py-4 flex items-center" key={index}>
                <span className="mr-4">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HamburgerMenu;

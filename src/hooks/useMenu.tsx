import { useState } from "react";

interface UseMenuReturnType {
  isDisplayedMenu: boolean;
  showMenu: () => void;
  hideMenu: () => void;
}

export const useMenu = (): UseMenuReturnType => {
  const [isDisplayedMenu, setIsDisplayedMenu] = useState(false);

  const showMenu = (): void => {
    setIsDisplayedMenu(true);
  };
  const hideMenu = (): void => {
    setIsDisplayedMenu(false);
  };

  return { isDisplayedMenu, showMenu, hideMenu };
};

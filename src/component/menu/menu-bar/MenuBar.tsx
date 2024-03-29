import React from "react";

import { getIcon, joinClasses } from "../../../common";
import Separator from "../../../component/separator/Separator";

import {
  DarkModeCtxState,
  useDarkModeContext,
} from "../../../context/DarkModeCtx";

import {
  useViewModeContext,
  ViewModeCtxState,
} from "../../../context/ViewModeCtx";

import { EMenuMode, ESeparatorDirection } from "../../../typings";

import "./_MenuBar.scss";

interface MenuBarProps {
  menuMode: EMenuMode;
  isMenuOpen: boolean;
}

/**
 *
 * @returns
 */
const MenuBar: React.FC<MenuBarProps> = ({ menuMode, isMenuOpen }) => {
  const darkModeCtx = useDarkModeContext();
  const viewModeCtx = useViewModeContext();

  return (
    <div className={joinClasses("menu-bar", isMenuOpen ? "open" : "closed")}>
      {makeMenuBarItems(menuMode, darkModeCtx, viewModeCtx)}
    </div>
  );
};

const iconBasicStyles = {
  fontSize: "1.8rem",
  boxSize: "border-box",
  borderRadius: "10px",
  transition: "0.5s ease-in-out",
};

const indicatorBorder = "2px dashed #b2b2b2";

const makeMenuBarItems = (
  menuMode: EMenuMode,
  darkModeCtx: DarkModeCtxState,
  viewModeCtx: ViewModeCtxState
): JSX.Element => {
  const darkIndicatorForSun = {
    border: !darkModeCtx.isDark ? indicatorBorder : "0",
  };

  const sunIconStyles = {
    ...iconBasicStyles,
    ...darkIndicatorForSun,
  };

  const darkIndicatorForMoon = {
    border: darkModeCtx.isDark ? indicatorBorder : "0",
  };

  const moonIconStyles = {
    ...iconBasicStyles,
    ...darkIndicatorForMoon,
  };

  switch (menuMode) {
    case EMenuMode.Others:
      return makeMenuBarItemsOthers(
        darkModeCtx.toggleDarkMode,
        sunIconStyles,
        moonIconStyles
      );

    case EMenuMode.Main:
      const viewModeIndicatorForGrid = {
        border: viewModeCtx.isGrid ? indicatorBorder : "0",
      };

      const gridIconStyles = {
        ...iconBasicStyles,
        ...viewModeIndicatorForGrid,
      };

      const viewModeIndicatorForList = {
        border: !viewModeCtx.isGrid ? indicatorBorder : "0",
      };

      const listIconStyles = {
        ...iconBasicStyles,
        ...viewModeIndicatorForList,
      };

      return makeMenuBarItemsMain(
        darkModeCtx.toggleDarkMode,
        viewModeCtx.toggleViewMode,
        sunIconStyles,
        moonIconStyles,
        listIconStyles,
        gridIconStyles
      );

    default:
      throw new Error("Unknown menu mode");
  }
};

const makeMenuBarItemsOthers = (
  toggleDarkMode: () => void,
  ...iconStyles: Array<{ [content: string]: string }>
) => (
  // only sun & moon
  <>
    {getIcon("Sun", toggleDarkMode, iconStyles[0])}
    {getIcon("Moon", toggleDarkMode, iconStyles[1])}
  </>
);

const makeMenuBarItemsMain = (
  toggleDarkMode: () => void,
  toggleViewMode: () => void,
  ...iconStyles: Array<{ [content: string]: string }>
) => (
  <>
    {getIcon("Sun", toggleDarkMode, iconStyles[0])}
    {getIcon("Moon", toggleDarkMode, iconStyles[1])}
    <Separator direction={ESeparatorDirection.Horizontal} />
    {getIcon("Grid", toggleViewMode, iconStyles[2])}
    {getIcon("List", toggleViewMode, iconStyles[3])}
  </>
);

export default MenuBar;

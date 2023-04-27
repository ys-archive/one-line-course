import React, { useState } from "react";
import { EMenuMode } from "../../typings";

import "./_Menu.scss";
import MenuBar from "./menu-bar/MenuBar";

import MenuHamburger from "./MenuHamburger";

interface MenuProps {
  menuMode: EMenuMode;
}

const Menu: React.FC<MenuProps> = ({ menuMode = EMenuMode.Main }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenu = (_: React.MouseEvent<HTMLDivElement>) =>
    setIsMenuOpen((prv) => !prv);

  return (
    <div className="menu-placer">
      <MenuBar menuMode={menuMode} isMenuOpen={isMenuOpen} />
      <div className="menu" onClick={onClickMenu}>
        <MenuHamburger />
        <MenuHamburger />
        <MenuHamburger />
      </div>
    </div>
  );
};

export default Menu;

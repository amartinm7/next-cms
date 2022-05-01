import PropTypes from "prop-types";
import styles from "./menu.module.scss";
import { useState } from "react";
import cx from "classnames";
import Image from "next/image";

const Menu = ({}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [myStyle, setMyStyle] = useState({ display: "none" });
  const menuClassName = cx(styles["ech-logo"], {
    [styles["ech-open-menu"]]: showMenu,
  });

  function toogleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className={styles["ech-header-container"]}>
      <div>
        <a href="#">
          <span>Shoe</span>
          <span>Land</span>
        </a>
      </div>
      <nav className={menuClassName}>
        <span className={styles["ech-close-icon"]} onClick={toogleMenu}>
          <Image src="/closeicon.svg" height={20} width={20} />
        </span>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </ul>
      </nav>
      <span className={styles["ech-menu-icon"]} onClick={toogleMenu}>
        <Image src="/menuicon.svg" height={20} width={20} />
      </span>
    </header>
  );
};
Menu.displayName = "Card";
Menu.propTypes = {
  // background: PropTypes.object,
};

export default Menu;

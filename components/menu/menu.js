import PropTypes from "prop-types";
import styles from "./menu.module.scss";
import { useState } from "react";
import cx from "classnames";

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
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
        </span>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </ul>
      </nav>
      <span className={styles["ech-menu-icon"]} onClick={toogleMenu}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="menu"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <g>
            <rect y="3" width="50" height="2" />
            <rect y="17" width="50" height="2" />
            <rect y="31" width="50" height="2" />
            <rect y="45" width="50" height="2" />
          </g>
        </svg>
      </span>
    </header>
  );
};
Menu.displayName = "Card";
Menu.propTypes = {
  // background: PropTypes.object,
};

export default Menu;

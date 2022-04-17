import styles from "./index.module.scss";

const classEchHeaderFixed = styles["ech-header-fixed"];

const Header = ({}) => {
  return (
    <div
      className={`header header-fixed u-unselectable header-animated ${classEchHeaderFixed}`}
    >
      <div className="header-brand ech-header-brand">
        <div className="nav-item no-hover">
          <a>
            <h6 className="title">ECH</h6>
          </a>
        </div>
        <div className="nav-item nav-btn" id="header-btn">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="header-nav" id="header-menu">
        <div className="nav-right">
          <div className="nav-item has-sub toggle-hover" id="dropdown">
            <a className="nav-dropdown-link">ECH Menu</a>
            <ul className="dropdown-menu dropdown-animated" role="menu">
              <li role="menu-item">
                <a href="#">First Item</a>
              </li>
              <li role="menu-item">
                <a href="#">Second Item</a>
              </li>
              <li role="menu-item">
                <a href="#">Third Item</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.displayName = "Header";
Header.propTypes = {};
export default Header;

import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import mobileMenuStyles from "./MobileMenu.module.css";

const MobileMenu = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  const closeMobileMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <>
      {!closeMenu && (
        <div
          className={mobileMenuStyles.mobileMenu}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <div className={mobileMenuStyles.closeMenu}>
            <RiCloseLine size={30} onClick={closeMobileMenu} />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

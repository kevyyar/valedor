import { useEffect, useRef, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

import Logo from "@/assets/logo.png";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import useMediaQuery from "@/hooks/useMediaQuery";

import NavBarStyles from "./Navbar.module.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // sticky navbar
  const [sticky, setSticky] = useState(false);
  // use ref to get the navbar element
  const navbarRef = useRef(null);

  const handleScroll = () => {
    if (window.pageYOffset > navbarRef.current.offsetTop) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sticky]);

  const isDesktop = useMediaQuery("(min-width: 960px)");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav
        className={`${NavBarStyles.navbar} ${sticky && NavBarStyles.sticky}`}
        ref={navbarRef}
      >
        {isDesktop ? (
          <>
            <div className={NavBarStyles.navbarLogo}>
              <Link to="/">
                <img src={Logo} alt="Valedor Tequila Logo" />
              </Link>
            </div>
            <div className={NavBarStyles.navbarLinks}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </>
        ) : (
          <div className={NavBarStyles.navbarMobile}>
            <div className={NavBarStyles.navbarLogoMobile}>
              <Link to="/">
                <img src={Logo} alt="Valedor Tequila Logo" />
              </Link>
            </div>
            <RiMenu3Line
              size={30}
              onClick={toggleMenu}
              color={sticky ? "#fff" : "#000"}
            />
            {/* Hamburger Menu */}
            {showMenu && <MobileMenu />}
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = ({ handleToggleIcon }) => {
  const [openMenus, setOpenMenus] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    handleToggleIcon(!isMenuOpen);
    setOpenMenus(isMenuOpen ? openMenus - 1 : openMenus + 1);
  };

  const handleMenuItemClick = (to) => {
    setIsMenuOpen(false);
    navigate(to);
  };

  return (
    <div style={{ position: "relative", zIndex: 1000 }}>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul
          ref={menuRef}
          className={`navbar__container__menu ${isMenuOpen ? "active" : ""}`}
          style={{ zIndex: openMenus }}
        >
          <li style={{cursor:'pointer'}} className="navbar__container__menu__item navbar__container__menu__item__links" onClick={() => handleMenuItemClick("/")}>Home</li>
          <li style={{cursor:'pointer'}} className="navbar__container__menu__item navbar__container__menu__item__links"onClick={() => handleMenuItemClick("/about")}>About</li>
          <li style={{cursor:'pointer'}} className="navbar__container__menu__item navbar__container__menu__item__links"onClick={() => handleMenuItemClick("/skills")}>Skills</li>
          <li style={{cursor:'pointer'}} className="navbar__container__menu__item navbar__container__menu__item__links"onClick={() => handleMenuItemClick("/resume")}>Resume</li>
          <li style={{cursor:'pointer'}} className="navbar__container__menu__item navbar__container__menu__item__links"onClick={() => handleMenuItemClick("/portfolio")}>Portfolio</li>
          <li style={{cursor:'pointer'}} className="navbar__container__menu__item navbar__container__menu__item__links"onClick={() => handleMenuItemClick("/contact")}>Contact</li>
          

        </ul>
        <div className="nav-icon" onClick={handleToggle}>
          {isMenuOpen ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


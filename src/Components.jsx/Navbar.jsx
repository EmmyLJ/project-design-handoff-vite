import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../translations";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "sv" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the dropdown when a link is clicked
  };

  return (
    <header>
      <nav className="navbar">
        <img src="MAGNB.png" alt="Company Logo" />
        <div className="navbar-buttons">
          <Link to="/about">
            <button>{t("about")}</button>
          </Link>
          <Link to="/membership">
            <button>{t("membership")}</button>
          </Link>
          <Link to="/facilities">
            <button>{t("facilities")}</button>
          </Link>
          <Link to="/opening-hours">
            <button>{t("openinghours")}</button>
          </Link>
          <button className="sign-in-button">{t("signIn")}</button>
          <button onClick={toggleLanguage}>Swedish/English</button>
        </div>
        <img
          src="./hamburger.svg"
          alt="Hamburger"
          className="hamburger"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <div className="dropdown">
            <Link
              to="/about"
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/membership"
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              Membership
            </Link>
            <Link
              to="/facilities"
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              Facilities
            </Link>
            <Link
              to="/opening-hours"
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              Opening Hours
            </Link>
            <Link
              to="/sign-in"
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              Sign in
            </Link>
            <button onClick={toggleLanguage}>Swedish/English</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({ darkMode, setDarkMode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const mobileNavRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // State to manage the accordion open/close

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    function handleClickOutside(event) {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [darkMode]);

  return (
    <>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img
            src="/architecture_website/assets/images/logo.png"
            alt="Home Building Associates"
          />
        </Link>
        <nav id="nav" className={styles.desktopNav}>
          <Link to="/architecture_website">Home</Link>
          <Link to="/about">About Us</Link>

          <div className={styles.dropdown}>
            <Link to="/services">Services</Link>
            <div className={styles.dropdown_content}>
              <Link to="/services/interior">Interior Designs</Link>
              <Link to="/services/exterior">Exterior Designs</Link>
              <Link to="/services/floor">Floor Plans</Link>
              <Link to="/services/house">House Plans</Link>
              <Link to="/services/landscape">Landscape Designs</Link>
              <Link to="/services/architecture">Architectural Drawings</Link>
            </div>
          </div>

          <Link to="/career">Career</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <div className={styles.btnGroup}>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <IoMoon size={22} /> : <IoSunny size={24} />}
          </button>
          <button
            className={styles.menuBtn}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </div>
      <nav
        ref={mobileNavRef}
        className={`${styles.mobileNav} ${openMenu ? styles.open : ""}`}
      >
        <Link to="/architecture_website" onClick={() => setOpenMenu(!openMenu)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setOpenMenu(!openMenu)}>
          About Us
        </Link>

        <div className={styles.menu_container}>
          <nav className={styles.menu}>
            <div>
              <Link
                to="/services"
                className={styles.services}
                onClick={toggleAccordion}
              >
                Services
              </Link>
            </div>
            {isOpen && (
              <div className={styles.dropdown}>
                <Link to="/services/exterior" className={styles.dropdown_item}>Exterior Design</Link>
                <Link to="/services/interior" className={styles.dropdown_item}>Interior Design</Link>
                <Link to="/services/floor" className={styles.dropdown_item}>Floor Planning</Link>
                <Link to="/services/house" className={styles.dropdown_item}>House Planning</Link>
                <Link to="/services/landscape" className={styles.dropdown_item}>Landscape Design</Link>
                <Link to="/services/architecture" className={styles.dropdown_item}>Architectural Drawings</Link>
              </div>
            )}
          </nav>
        </div>

        <Link to="/career" onClick={() => setOpenMenu(!openMenu)}>
          Career
        </Link>
        <Link to="/contact" onClick={() => setOpenMenu(!openMenu)}>
          Contact Us
        </Link>
      </nav>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({ darkMode, setDarkMode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const mobileNavRef = useRef(null);

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
          <img src="/architecture_website/assets/images/logo.png" alt="Home Building Associates" />
        </Link>
        <nav id="nav" className={styles.desktopNav}>
          <Link to="/architecture_website">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
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
        <Link to="/architecture_website">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/career">Career</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </>
  );
}

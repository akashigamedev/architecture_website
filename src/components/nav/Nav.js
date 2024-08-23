import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


export default function Nav({darkMode, setDarkMode}) {
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className={styles.grid}>
      <Link to="/" class={styles.logo}>
        <img src="/assets/images/logo.png" alt="Home Building Associates" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/career">Career</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <button onClick={() => setDarkMode(!darkMode)} style={styles.toggleBtn}>
        {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
      </button>
    </div>
  );
}

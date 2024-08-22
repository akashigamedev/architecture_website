import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
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
    </div>
  );
}

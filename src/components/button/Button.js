import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button({ text, link, onClick, style }) {
  return (
    <Link to={link} className={`${styles.btn} ${style}`} onClick={onClick} >
      {text}
    </Link>
  );
}

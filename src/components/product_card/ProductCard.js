import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ name, description, image, style }) {
  return (
    <div className={`${styles.container} ${style}`}>
      <img src={image} alt="Interior Product" />
      <div className={styles.textSection}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

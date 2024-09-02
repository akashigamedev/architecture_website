import React from "react";
import styles from "./IconCard.module.css";

const IconCard = ({item}) => {
  return (
    <div className={styles.card}>
      <img src={item.img} alt={item.title} />
      <h4>{item.title}</h4>
    </div>
  );
};

export default IconCard;

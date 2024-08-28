import React from "react";
import styles from "./Benefits.module.css";

export default function Benefits() {
  const benefits = [
    "Innovative Projects",
    "Career Growth",
    "Collaborative Environment",
    "Creative Freedom",
    "Competitive Compensation",
    "Work-Life Balance",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2>Benefits of working with us</h2>
      </div>
      {benefits.map((benefit) => (
        <div className={styles.card}>{benefit}</div>
      ))}
    </div>
  );
}

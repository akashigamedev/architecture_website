import React from "react";
import styles from "./Process.module.css";

export default function Process({ data }) {
  return (
    <div className={styles.grid}>
      <div className={styles.textSection}>
        <h2>Our Process</h2>
        <p>
          Discover our streamlined process that ensures exceptional results.
          From initial consultation to final delivery, we prioritize clear,
          meticulous planning, and quality execution. Learn how our step-by-step
          approach transforms ideas into reality.
        </p>
      </div>
      {data.map((item) => (
        <div className={styles.processCard}>
          <img src={item.icon} alt="" />
          <h4>{item.text}</h4>
        </div>
      ))}
    </div>
  );
}

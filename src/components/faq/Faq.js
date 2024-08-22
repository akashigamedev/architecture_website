import React from "react";
import data from "../../db/about/faq.json";
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "60px",
        }}
      >
        <h2>Frequently Asked Question</h2>
        <p>Trusted more than 1000+ clients</p>
      </div>
      {data.map((item) => {
        return (
          <div className={styles.accordian}>
            <div className={styles.question}>
              <p>{item.question}</p>
              <img className="image" src={item.image} alt="image" />
            </div>
            <div className={styles.answer}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

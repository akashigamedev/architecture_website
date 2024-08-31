import React from "react";
import styles from "./Testimonials.module.css";
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function Testimonials({ title, description, data }) {
  return (
    <div className={styles.grid}>
      <div className={styles.textSection}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {data.map((item, index) => (
        <div className={styles.testimonialCard} key={index}>
          <BiSolidQuoteLeft size={24} color="var(--clr-accent)" />
          <p>{item.review}</p>
          <div className={styles.user}>
            <img className={styles.avatar} src={item.avatar} alt="user image" />
            <h4>{item.username}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

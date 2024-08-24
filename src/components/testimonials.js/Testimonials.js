import React from "react";
import styles from "./Testimonials.module.css";
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function Testimonials({ data }) {
  return (
    <div className={styles.grid}>
      <div className={styles.textSection}>
        <h2>What Our Clients Say?</h2>
        <p>
          Hear directly from our satisfied clients about their experiences
          working with us. Their testimonials highlight our commitment to
          exceptional design, personalized service, and successful project
          outcomes.
        </p>
      </div>
      {data.map((item) => (
        <div className={styles.testimonialCard}>
          <BiSolidQuoteLeft size={24} color='var(--clr-accent)' />
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

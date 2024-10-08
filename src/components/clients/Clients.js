import React from "react";
import styles from "./Clients.module.css";
import data from "../../db/services/client.json";

export default function Clients() {
  return (
    <div className={styles.grid}>
      <div className={styles.textSection}>
        <h2>Reviews Of Statisfied Clients</h2>
        <p>
          Hear directly from our satisfied clients about their experiences
          working with us. Their testimonials highlight our commitment to
          exceptional design, personalized service, and successful project
          outcomes.
        </p>
      </div>
      {data.map((item) => (
        <div className={styles.testimonialCard}>
          <img src="/architecture_website/assets/icons/quote.png" alt='""' />
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

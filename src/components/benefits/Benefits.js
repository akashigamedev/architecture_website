import React from "react";
import styles from "./Benefits.module.css";
import IconCard from '../icon_card/IconCard';

export default function Benefits() {
  const benefits = [
    {
      title: "Innovative Projects",
      img: "/architecture_website/assets/images/benefits/innovative.png",
    },
    {
      title: "Career Growth",
      img: "/architecture_website/assets/images/benefits/growth.png",
    },
    {
      title: "Collaborative Environment",
      img: "/architecture_website/assets/images/benefits/collaborate.png",
    },
    {
      title: "Creative Freedom",
      img: "/architecture_website/assets/images/benefits/creativity.png",
    },
    {
      title: "Competitive Compensation",
      img: "/architecture_website/assets/images/benefits/competition.png",
    },
    {
      title: "Work-Life Balance",
      img: "/architecture_website/assets/images/benefits/balance.png",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2>Benefits of working with us</h2>
      </div>
      <div className={styles.cardGroup}>
        {benefits.map((item, index) => (
          <IconCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

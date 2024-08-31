import React from "react";
import styles from "./Achievement.module.css";

const data = [
  {
    count: 50,
    text: "Projects completed",
  },
  {
    count: 20,
    text: "Years of experience",
  },
  {
    count: 35,
    text: "Awards",
  },
  {
    count: 40,
    text: "Cities covered",
  },
];

const Achivements = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: "url(/architecture_website/assets/images/8.png)",
      }}
    >
      <div className={styles.contentSection}>
        <div className={styles.achievementSection}>
          {data.map((item, index) => (
            <div className={styles.card} key={index}>
              <h3>{item.count}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.textSection}>
          <h3>Leading the Architectural & Home design industry since 2002</h3>
          <p>
            We are proud of our numerous successful projects and industry
            recognitions. From award-winning designs to satisfied clients, our
            achievements reflect our dedication to quality and innovation in
            every endeavor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Achivements;
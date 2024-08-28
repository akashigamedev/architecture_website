import React from "react";
import styles from "./WorkWithUs.module.css";

export default function Workus() {
  return (
    <div>
      <div className={styles.container}>
        <h1>CAREER</h1>
        <div className={styles.section}>
          <div className={styles.contentSection}>
            <h2>Work With Us</h2>
            <img
              className={styles.smallerDevicesImg}
              src="/assets/images/9.png"
              alt="work"
            />
            <p>
              Join our dynamic team and be a part of a company that values
              creativity, innovation, and collaboration. We offer a stimulating
              work environment where your ideas are valued and your professional
              growth is supported. Whether you’re an experienced professional or
              just starting out, working with us means engaging in exciting
              projects that push the boundaries of design and architecture.
              Explore opportunities to make a real impact and grow with us.
            </p>
          </div>
          <img src="/assets/images/9.png" alt="work" />
        </div>
      </div>
    </div>
  );
}

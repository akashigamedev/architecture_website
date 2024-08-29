import React from "react";
import styles from "./Leaders.module.css";
export default function Leader() {
  return (
    <div className={styles.big}>
      <div className={styles.maincontain}>
        <div className={styles.head}>
          <h2>Meet Our Leader</h2>
          <p>
            Our leaders are seasoned professionals with a passion for innovative
            design and a commitment to excellence. They guide our team to
            deliver outstanding results for every project.
          </p>
        </div>

        <div className={styles.contain}>
          <div className={styles.card}>
            <img src="/architecture_website/assets/images/4.png" />
            <h4>Jitendra Goyal</h4>
            <p>CEO</p>
          </div>

          <div className={styles.card}>
            <img src="/architecture_website/assets/images/5.png" />
            <h4>Babita Goyal</h4>
            <p>CEO</p>
          </div>

          <div className={styles.card}>
            <img src="/architecture_website/assets/images/6.png" />
            <h4>Yogendra Goyal</h4>
            <p>Civil Engineer</p>
          </div>

          <div className={styles.card}>
            <img src="/architecture_website/assets/images/7.png" />
            <div className={styles.card4}>
              <h4> Kritika Shukla</h4>
              <p>3d Artist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

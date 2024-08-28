import React from "react";
import styles from "./Achievement.module.css";

export default function Achivements() {
  return (
    <div className={styles.main}>
      <div
        className={styles.mainCard}
        style={{
          backgroundImage: "url(/assets/images/8.png)",
        }}
      >
        <div className={styles.flex}>
          <div className={styles.by}>
            <div className={styles.cardrow}>
              <div className={styles.comp}>
                <h3>150</h3>
                <p>Projects Completed</p>
              </div>

              <div className={styles.comp}>
                <h3>150</h3>
                <p>Projects Completed</p>
              </div>
            </div>

            <div className={styles.cardrow}>
              <div className={styles.comp}>
                <h3>150</h3>
                <p>Projects Completed</p>
              </div>

              <div className={styles.comp}>
                <h3>150</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>

          <div className={styles.text}>
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
    </div>
  );
}

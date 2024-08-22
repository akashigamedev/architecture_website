import React from "react";
import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <div>
      <div className={styles.heading}>
        <h2>Benefits of working with us</h2>
      </div>

      <div className={styles.out} >
        <div className={styles.middle} style={{ }}>
          <div className={styles.in}>
            <div className={styles.contain} >
              <h4>
                Innovative projects
              </h4>
            </div>

            <div
              className={styles.contain}
            >
              <h4 >
                Carrer Growth
              </h4>
            </div>

            <div
             className={styles.contain}
            >
              <h4 >
                Collaborative Environment
              </h4>
            </div>
          </div>

          <div className={styles.in}>
            <div
              className={styles.contain}
            >
              <h4 >
                Creative Freedom
              </h4>
            </div>

            <div
             className={styles.contain} 
            >
              <h4 >
                Competitive Compensation
              </h4>
            </div>

            <div
              className={styles.contain}
            >
              <h4 >
                Work-Life Balance
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

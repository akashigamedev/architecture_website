import React from "react";
import data from "../../db/career/oppor.json";
import styles from "./Opportunities.module.css";

export default function Opportunites() {
  return (
    <div className={styles.main}>
      <h2>
        Career Opportunities
      </h2>
      <div className={styles.opSection}>
        {data.map((item) => {
          return (
            <div
              className={styles.opCard}
            >
              <div className={styles.contain}>
                <div className={styles.top}
                  style={{
                    
                  }}
                >
                  <div className={styles.cont}>
                    <h4>{item.position}</h4>
                    <p>{item.duration}</p>
                  </div>
                  <div className={styles.im}>
                    <img src={item.image} />
                  </div>
                </div>
<div className={styles.last}>
                <p >{item.description}</p>
                </div>
                <p>{item.salary}</p>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

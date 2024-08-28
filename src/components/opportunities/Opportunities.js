import React from "react";
import data from "../../db/career/oppor.json";
import styles from "./Opportunities.module.css";
import { GoArrowUpRight } from "react-icons/go";

export default function Opportunites() {
  return (
    <div className={styles.container}>
      <h2>Career Opportunities</h2>
      {data.map((item) => {
        return (
          <div className={styles.card}>
            <div className={styles.headSection}>
              <div className={styles.titleGroup}>
                <h4>{item.position}</h4>
                <p>{item.duration}</p>
              </div>
              <a href="#" className={styles.btn}>
                <GoArrowUpRight size={20} />
              </a>
            </div>
            <div className={styles.detailSection}>
              <p className={styles.description}>{item.description}</p>
              <p>{item.salary}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import styles from "./ProjectStats.module.css";

export default function ProjectStats({ data }) {
  return (
    <div className={styles.grid}>
      {data.map((stat, index) => (
        <div className={styles.statCard} key={index}>
          <h3>{stat.count}</h3>
          <p>Projects in</p>
          <h4>{stat.state}</h4>
        </div>
      ))}
    </div>
  );
}

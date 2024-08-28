import React from "react";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.big}>
      <div className={styles.head}>
        <h2>Why Choose Us?</h2>
        <p>
          Partner with us for expert consultation, personalized designs , and
          cutting-edge 3D visualizations. We ensure sustainable, cost-effective
          solutions to bring your vision to life.
        </p>
      </div>

      <div className={styles.cardcontain}>
        <div className={styles.container}>
          <div>
            <img src="/assets/images/1.jpeg" alt="this is an image" />
            <h4>Expert Consultation</h4>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <img src="/assets/images/1.jpeg" alt="this is an image" />
            <h4>Customized Designs</h4>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <img src="/assets/images/1.jpeg" alt="this is an image" />
            <h4>3D Visualization</h4>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <img src="/assets/images/1.jpeg" alt="this is an image" />
            <h4>Comprehensive Planning</h4>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <img src="/assets/images/1.jpeg" alt="this is an image" />
            <h4>Sustainable Solution</h4>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <img src="/assets/images/1.jpeg" alt="this is an image" />
            <h4>Budget Optimization</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

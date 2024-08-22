import React from "react";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.big}>
      <div className={styles.head}>
        <h2>
          Why Choose Us?
        </h2>
        <h4>
          Partner with us for expert consultation, personalized designs , and
          cutting-edge 3D visualizations. We ensure sustainable, cost-effective
          solutions to bring your vision to life.
        </h4>
      </div>

      <div className={styles.cardcontain}>
        <div className={styles.cardrow}>
          <div className={styles.container} >
            <div>
              <img src="/assets/images/1.jpeg" alt="this is an image" />
              <h4>expert consultation</h4>
            </div>
          </div>

          <div className={styles.container} >
            <div>
              <img src="/assets/images/1.jpeg" alt="this is an image" />
              <h4>Custmized Designs</h4>
            </div>
          </div>

          <div className={styles.container} >
            <div>
              <img
                
                src="/assets/images/1.jpeg"
                alt="this is an image"
              />
              <h4>3D Visulization</h4>
            </div>
          </div>
        </div>

        <div>
        <div className={styles.cardrow}>
           <div className={styles.container} >
              <div>
                <img
                  
                  src="/assets/images/1.jpeg"
                  alt="this is an image"
                />
                <h4>Comprehensive Planning</h4>
              </div>
            </div>

            <div className={styles.container} >
              <div>
                <img src="/assets/images/1.jpeg" alt="this is an image" />
                <h4>Sustaniable Solution</h4>
              </div>
            </div>

            <div className={styles.container} >
              <div>
                <img
                 
                  src="/assets/images/1.jpeg"
                  alt="this is an image"
                />
                <h4>Budget Optimization</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

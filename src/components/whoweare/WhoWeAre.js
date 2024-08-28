import React from "react";
import styles from "./WhoWeAre.module.css";

const WhoWeAre = () => {
  return (
    <div className={styles.container}>
      {/* <h1>About us</h1> */}
      <section>
        <div className={styles.textSection}>
          <h2>Who we are?</h2>
          <p>
            Home Building Associates is a team of architects, civil engineers,
            interior designers and a lot of software engineers who love
            designing, who love construction, who love seeing a idea turn into a
            beautiful home. We are working this field in the last 15 years. We
            are based on Kanpur, Uttar Pradesh Company and providing Our
            Services in all over India with very reasonable Costing.
          </p>
        </div>
        <img src="/assets/images/2.png" alt="" />
      </section>
      <section>
        <div className={styles.textSection}>
          <h2>Our Mission</h2>
          <p>
            One of the biggest achievements in life is considered to be building
            one's own house. Whether you are building a home on a plot or have
            recently purchased an apartment flat, Home Building Associates (HBA)
            helps you with all your planning and design needs without needing a
            time consuming and expensive visit to an engineer or a designer.
          </p>
        </div>
        <img src="/assets/images/2.png" alt="" />
      </section>
    </div>
  );
};

export default WhoWeAre;

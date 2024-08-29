import React from "react";
import styles from "./Card.module.css";

const data = [
  {
    title: "Expert Consultation",
    img: "/architecture_website/assets/images/workwithus/consult.png",
  },
  {
    title: "Customized Designs",
    img: "/architecture_website/assets/images/workwithus/design.png",
  },
  {
    title: "3D Visualization",
    img: "/architecture_website/assets/images/workwithus/3d.png",
  },
  {
    title: "Comprehensive Planning",
    img: "/architecture_website/assets/images/workwithus/planning.png",
  },
  {
    title: "Sustainable Solutions",
    img: "/architecture_website/assets/images/workwithus/solution.png",
  },
  {
    title: "Budget Optimization",
    img: "/architecture_website/assets/images/workwithus/budget.png",
  }
];

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

      <div className={styles.cardGroup}>
        {data.map((item) => (
          <div className={styles.card}>
            <img
              src={item.img}
              alt={item.title}
            />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import ProductCard from "../product_card/ProductCard";
import styles from "./ProductSection.module.css";
import Button from "../button/Button";

export default function ProductSection({
  title,
  description,
  category,
  data,
  btnTitle,
  link,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {data.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          description={product.description}
          image={product.image}
          style={styles.productCard}
        />
      ))}
      <Button
        text={btnTitle}
        link={link ? link : `/services/${category}`}
        style={styles.btn}
      />
    </div>
  );
}

import React, { useState } from "react";
import data from "../../db/about/faq.json";
import styles from "./Faq.module.css";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleHandle = () => setIsOpen(!isOpen);
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`} onClick={ToggleHandle}>
      <div className={styles.questionSection}>
        <p className={styles.question}>{question}</p>
        {isOpen ? <IoChevronUp size={16} /> : <IoChevronDown size={16} />}
      </div>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

const Faq = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.textSection}>
        <h2>Frequently Asked Question</h2>
        <p style={{ color: "var(--clr-text-400)" }}>
          Trusted more than 1000+ clients
        </p>
      </div>
      <div className={styles.faqSection}>
        {data.map((item) => {
          return <FaqItem question={item.question} answer={item.answer} />;
        })}
      </div>
    </div>
  );
};

export default Faq;

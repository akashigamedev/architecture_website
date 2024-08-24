import React from "react";
import styles from "./Process.module.css";
import { RiStickyNoteFill } from "react-icons/ri";
import { MdEngineering, MdScience } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

export default function Process({ data }) {
  return (
    <div className={styles.grid}>
      <div className={styles.textSection}>
        <h2>Our Process</h2>
        <p>
          Discover our streamlined process that ensures exceptional results.
          From initial consultation to final delivery, we prioritize clear,
          meticulous planning, and quality execution. Learn how our step-by-step
          approach transforms ideas into reality.
        </p>
      </div>
      <div className={styles.processCard}>
        <RiStickyNoteFill color="var(--clr-accent)" size={48} />
        <p>Submit Your Enquiry</p>
      </div>

      <div className={styles.processCard}>
        <MdScience color="var(--clr-accent)" size={48} />
        <p>Requirement Analysis By Our Team</p>
      </div>

      <div className={styles.processCard}>
        <FaHandshake color="var(--clr-accent)" size={48} />
        <p>Freeze Your Requirement</p>
      </div>

      <div className={styles.processCard}>
        <MdEngineering color="var(--clr-accent)" size={48} />
        <p>Construction Begins</p>
      </div>
    </div>
  );
}

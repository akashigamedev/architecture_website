import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import Popup from "reactjs-popup";
import data from "../../db/career/oppor.json";
import styles from "./Opportunities.module.css";
import ReactLoading from "react-loading";
import { IoCloseOutline } from "react-icons/io5";

const PopupForm = ({ selectedPosition, close }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // handle submission code here...
    // setIsLoading(false);
  };

  return (
    <div className={styles.popcontainer}>
      <h2>Apply Now</h2>
      <button
        className={`${styles.btn} ${styles.closeBtn}`}
        onClick={() => close()}
        area-label="Close"
      >
        <IoCloseOutline size={16} />
      </button>
      <form className={styles.popform} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Full Name" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" placeholder="Phone Number" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="position">Position</label>
          <select name="position" defaultValue={selectedPosition}>
            {data.map((item, index) => (
              <option key={index} value={item.position}>
                {item.position}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="resume">Resume</label>
          <input type="file" name="resume" accept="application/pdf" />
        </div>
        <button className={styles.btn} type="submit" disabled={isLoading}>
          SUBMIT
          {isLoading ? (
            <ReactLoading type="spin" width={16} color="white" height={16} />
          ) : (
            <IoIosSend size={16} />
          )}
        </button>
      </form>
    </div>
  );
};

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
              <Popup
                trigger={
                  <button
                    href="#"
                    className={`${styles.roundedbtn} ${styles.btn}`}
                  >
                    <GoArrowUpRight size={20} />
                  </button>
                }
                modal
                nested
              >
                {(close) => (
                  <PopupForm selectedPosition={item.position} close={close} />
                )}
              </Popup>
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

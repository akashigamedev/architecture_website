import React, { useState } from 'react';
import data from "../../db/career/oppor.json";
import styles from "./Pop.module.css";
import { GoArrowUpRight } from "react-icons/go";

export default function Opportunites() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const openForm = (position) => {
    setIsFormOpen(true);
    setSelectedPosition(position);
  }

  const closeForm = () => {
    setIsFormOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  }

  const closeThankYou = () => {
    setIsOpen(false);
    setIsFormOpen(false);
  }

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
              <a href="#" className={styles.btn} onClick={() => openForm(item.position)}>
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
      {isFormOpen && (
        <div className={styles.body}>
          <div className={styles.container}>
            <h2>APPLY NOW FOR {selectedPosition}</h2>
            <form id="myForm" onSubmit={handleSubmit}>
              <div className={styles.form}>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="First and Last" required/>
              </div>
              <div className={styles.form}>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Email address" required/>
              </div>
              <div className={styles.form}>
                <label for="phone">Mobile No.:</label>
                <input type="tel" id="phone" name="phone" placeholder="Mobile No." required/>
              </div>
              <div className={styles.form}>
                <label for="position">Position:</label>
                <input type="text" id="position" name="position" value={selectedPosition} readOnly/>
              </div>
              <div className={styles.form}>
                <label for="resume">CV.PDF:</label>
                <input type="file" id="resume" name="resume" accept=".pdf" required/>
              </div>
              <button type="submit" className={styles.btn}>SUBMIT</button>
              {isOpen && (
                <div className={styles.Pops}>
                  <img src='/architecture_website/assets/images/download.png'/>
                  <h2> Thank You</h2>
                  <p>You details has been successfully submitted. Thanks</p>
                  <button type='button' onClick={closeThankYou}> OK</button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

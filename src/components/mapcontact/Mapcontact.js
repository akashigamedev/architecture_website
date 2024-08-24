import React from "react";
import data from "../../db/about/mapcontact.json";
import styles from "./MapContact.module.css";
import { IoMail, IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const MapContact = () => {
  return (
    <div className={styles.main}> <h2>CONTACT US</h2>
    <div className={styles.grid}>
      <div className={styles.left}>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.772281001471!2d80.31293984586917!3d26.463068317584572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c478112af3175%3A0xe4d957e44bab8991!2sHome%20Building%20Associates!5e0!3m2!1sen!2sin!4v1724347443649!5m2!1sen!2sin"
          style={{border: 0, filter: "invert(92%) contrast(83%)"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.right}>
        <div className={styles.textSection}>
          <h4 style={{ fontWeight: "bold" }}>Get in Touch</h4>
          <p>
            Contact us today to discuss your needs and explore how we can bring
            your vision to life. We look forward to hearing from you!
          </p>
        </div>
        <div>
          {data.map((item) => {
            return (
              <div className={styles.contactInfoSection}>
                <div className={styles.contactInfoItem}>
                  <IoCall size={24} color="var(--clr-accent)" />
                  <p>{item.phone}</p>
                </div>
                <div className={styles.contactInfoItem}>
                  <IoMail size={24} color="var(--clr-accent)" />
                  <p>{item.email}</p>
                </div>
                <div className={styles.contactInfoItem}>
                  <FaLocationDot size={24} color="var(--clr-accent)" />
                  <p>{item.address}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MapContact;

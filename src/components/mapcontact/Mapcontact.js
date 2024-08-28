import React from "react";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import styles from "./MapContact.module.css";

const data = {
  email: "homebuildingassociates.interior@gmail.com",
  phone: "+91(829) 987-1379  •  +91(991) 985-2251",
  address: `Home Building Associates 119/517,
     Darshan Purwa, Kanpur 208012, Uttar Pradesh`,
};

const Mapcontact = () => {
  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <div className={styles.grid}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.772278444029!2d80.3178054!3d26.463068399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c478112af3175%3A0xe4d957e44bab8991!2sHome%20Building%20Associates!5e0!3m2!1sen!2sin!4v1724829470169!5m2!1sen!2sin"
            className="map"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.textSection}>
            <h4>Get in Touch</h4>
            <p>
              We'd love to hear from you. Our friendly team is always here to
              chat.
            </p>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <IoMailOutline size={24} className={styles.icon} />
              <div>
                <h4>Chat with us</h4>
                <span>{data.email}</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <IoCallOutline size={24} className={styles.icon} />
              <div>
                <h4>Phone</h4>
                <span>{data.phone}</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <IoLocationOutline size={24} className={styles.icon} />
              <div>
                <h4>Office</h4>
                <span>{data.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapcontact;

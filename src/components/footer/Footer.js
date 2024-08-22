import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={`${styles.mainFooter} ${styles.grid}`}>
        <div className={styles.aboutSection}>
          <h4>About Us</h4>
          <p>
            Home Building Associates (HBA) Providing the best Architectural
            Services Solutions in one place. We are working this field in the
            last 15 years. We are based on Kanpur, Uttar Pradesh Company and
            providing Our Services in all over India with very reasonable
            Costing.
          </p>
        </div>
        <div className={styles.servicesSection}>
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/services/interior">Interior design</Link>
            </li>
            <li>
              <Link to="/services/exterior">Exterior design</Link>
            </li>
            <li>
              <Link to="/services/floorplans">Floor planning</Link>
            </li>
            <li>
              <Link to="/services/houseplans">House planning</Link>
            </li>
            <li>
              <Link to="/services/landscape">Landscape design</Link>
            </li>
            <li>
              <Link to="/services/architectural">Architectural design</Link>
            </li>
          </ul>
        </div>
        <div className={styles.contactSection}>
          <h4>Contact Us</h4>
          <div>
            <img src="/assets/icons/email.png" alt="Email:" />
            <p>homebuildingassociates.interior@gmail.com</p>
          </div>
          <div>
            <img src="/assets/icons/phone.png" alt="Phone:" />
            <p>+91 (829) 987-1379</p>
          </div>
          <div>
            <img src="/assets/icons/phone.png" alt="Phone:" />
            <p>+91 (991) 985-2251</p>
          </div>
          <div>
            <img src="/assets/icons/phone.png" alt="Phone:" />
            <p>+91 (969) 585-9777</p>
          </div>
          <div>
            <img src="/assets/icons/house.png" alt="Address:" />
            <p>
              Home Building Associates 119/517, Darshan Purwa, Kanpur 208012,
              Uttar Pradesh
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.copyrightFooter}  ${styles.grid}`}>
        <span>@2024 Home Building Associates | All Rights Reserved</span>
        <img src="/assets/images/logo.png" alt="Home Building Associates" />
        <div className={styles.links}>
          <a href="#">
            <img src="/assets/icons/instagram.png" alt="instagram" />
          </a>
          <a href="#">
            <img src="/assets/icons/twitter.png" alt="twitter" />
          </a>
          <a href="#">
            <img src="/assets/icons/linkedin.png" alt="linkedin" />
          </a>
          <a href="#">
            <img src="/assets/icons/facebook.png" alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import {
  FaFacebookF,
  FaHouse,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={`${styles.mainFooter} ${styles.grid}`}>
        <div className={styles.aboutSection}>
          <h3>About Us</h3>
          <p>
            Home Building Associates (HBA) Providing the best Architectural
            Services Solutions in one place. We are working this field in the
            last 15 years. We are based on Kanpur, Uttar Pradesh Company and
            providing Our Services in all over India with very reasonable
            Costing.
          </p>
        </div>
        <div className={styles.servicesSection}>
          <h3>Services</h3>
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
          <h3>Contact Us</h3>
          <div>
            <div>
              <MdEmail className={styles.icon} size={24} />
              <p>homebuildingassociates.interior@gmail.com</p>
            </div>
            <div>
              <MdPhone className={styles.icon} size={24} />
              <p>+91 (829) 987-1379</p>
            </div>
            <div>
              <MdPhone className={styles.icon} size={24} />
              <p>+91 (991) 985-2251</p>
            </div>
            <div>
              <MdPhone className={styles.icon} size={24} />
              <p>+91 (969) 585-9777</p>
            </div>
            <div>
              <FaHouse className={styles.icon} size={28} />
              <p>
                Home Building Associates 119/517, Darshan Purwa, Kanpur 208012,
                Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.copyrightFooter}  ${styles.grid}`}>
        <span>&copy;2024 Home Building Associates | All Rights Reserved</span>
        <img
          className={styles.logo}
          src="/assets/images/logo.png"
          alt="Home Building Associates"
        />
        <div className={styles.followSection}>
          <h3>Follow Us</h3>
          <div className={styles.links}>
            <a href="#">
              <div>
                <FaInstagram size={24} />
              </div>
            </a>
            <a href="#">
              <div>
                <FaFacebookF size={24} />
              </div>
            </a>
            <a href="#">
              <div>
                <FaXTwitter size={24} />
              </div>
            </a>
            <a href="#">
              <div>
                <FaLinkedinIn size={24} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

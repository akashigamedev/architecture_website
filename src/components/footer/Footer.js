import React from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h4>Information</h4>
        <div className={styles.contactSection}>
          <div>
            <span>Email</span>
            <p>homebuildingassociates.interior@gmail.com</p>
          </div>
          <div>
            <span>Phone Number</span>
            <p>91 (829) 987-1379</p>
            <p>91 (991) 985-2251</p>
            <p>91 (969) 585-9777</p>
          </div>
          <div>
            <span>Office Address</span>
            <p>
              Home Building Associates 119/517, Darshan Purwa, Kanpur 208012,
              Uttar Pradesh
            </p>
          </div>
        </div>
        <div className={`${styles.socialLinks} ${styles.disable}`}>
          <a href="#">
            <IoLogoInstagram size={24} />
          </a>
          <a href="#">
            <FaXTwitter size={24} />
          </a>
          <a href="#">
            <FaFacebookF size={24} />
          </a>
          <a href="#">
            <IoLogoWhatsapp size={24} />
          </a>
        </div>
      </div>
      <div className={styles.linksSection}>
        <h4>Links</h4>
        <div className={styles.linksGroup}>
          <Link to="/architecture_website">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact Us</Link>
          <a href="#nav">Go to top</a>
        </div>
      </div>
      <div className={styles.serviceSection}>
        <h4>Services</h4>
        <div className={styles.serviceGroup}>
          <Link to="/services/interior">Interior Design</Link>
          <Link to="/services/exterior">Exterior Design</Link>
          <Link to="/services/floor">Floor Plans</Link>
          <Link to="/services/house">House Plans</Link>
          <Link to="/services/landscape">Landscape Designs</Link>
          <Link to="/services/architecture">Architectural Drawings</Link>
        </div>
      </div>
      <div className={styles.socialSection}>
        <h4>Social Media</h4>
        <p>
          Follow us on social media to find out the latest updates to our
          progress.
        </p>
        <div className={styles.socialLinks}>
          <a href="#">
            <IoLogoInstagram size={24}/>
          </a>
          <a href="#">
            <FaXTwitter size={24} />
          </a>
          <a href="#">
            <FaFacebookF size={24} />
          </a>
          <a href="#">
            <IoLogoWhatsapp size={24} />
          </a>
        </div>
      </div>
      <div className={styles.copyrightSection}>
        <span className={styles.copyright}>
          &copy;2024 Home Building Associates | All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;

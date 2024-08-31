import React from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = ({ darkMode, setDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mainLinks = [
    {
      title: "Home",
      link: "/architecture_website",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Career",
      link: "/career",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
  ];
  const serviceLinks = [
    {
      title: "Interior Design",
      link: "/services/interior",
    },
    {
      title: "Exterior Design",
      link: "/services/exterior",
    },
    {
      title: "Floor Plans",
      link: "/services/floor",
    },
    {
      title: "House Plans",
      link: "/services/house",
    },
    {
      title: "Landscape Designs",
      link: "/services/landscape",
    },
    {
      title: "Architectural Drawings",
      link: "/services/architecture",
    },
  ];

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
          {mainLinks.map((item, index) => (
            <Link key={index} to={item.link} onClick={scrollToTop}>
              {item.title}
            </Link>
          ))}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <a href="#nav" onClick={scrollToTop}>
            Go to top
          </a>
        </div>
      </div>
      <div className={styles.serviceSection}>
        <h4>Services</h4>
        <div className={styles.serviceGroup}>
          {serviceLinks.map((item, index) => (
            <Link key={index} to={item.link} onClick={scrollToTop}>
              {item.title}
            </Link>
          ))}
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
      <div className={styles.copyrightSection}>
        <span className={styles.copyright}>
          &copy;2024 Home Building Associates | All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;

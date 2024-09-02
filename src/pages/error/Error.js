import React from "react";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={styles.errorPage}>
      <h1>404</h1>
      <p>Whoops... Page Not Found!!!</p>
      <Link to="/architecture_website/" className={styles.btn}>
        Go Home
      </Link>
    </div>
  );
};

export default Error;

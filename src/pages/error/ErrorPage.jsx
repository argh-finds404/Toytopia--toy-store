import React from "react";
import styles from "./ErrorPage.module.css";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.content}>
        <h2 className={styles.header} data-text="404">
          404
        </h2>
        <h4 data-text="Oops! Page not found">Oops! Page not found</h4>
        <p>
          Sorry, the page you're looking for doesn't exist. If you think
          something is broken, report a problem.
        </p>
        <div className={styles.btns}>
          <Link to="/">Return Home</Link>
          <Link to='/contact'>Report Problem</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles['error-container']}>
      <h1 className={styles['error-title']}>Error 404</h1>
      <p className={styles['error-message']}>La página que buscas no existe.</p>
      <Link to="/home" className={styles['home-link']}>
        Go back home
      </Link>
    </div>
  );
};

export default Error;

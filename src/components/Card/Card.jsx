import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  const handleCloseClick = () => {
    onClose(id);
  };

  return (
    <div className={styles.card}>
      <button onClick={handleCloseClick} className={styles.closeButton} />
      <Link to={`/detail/${id}`} className={styles.cardTitle}>
        <h2>{name}</h2>
      </Link>
      {/* <h2 className={styles.cardContent}>Status: {status}</h2>
      <h2 className={styles.cardContent}>Species: {species}</h2>
      <h2 className={styles.cardContent}>Gender: {gender}</h2>
      <h2 className={styles.cardContent}>Origin: {origin.name}</h2> */}
      <img src={image} alt='' className={styles.cardImage} />
    </div>
  );
}

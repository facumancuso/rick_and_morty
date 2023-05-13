import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  const { name, status, species, gender, origin, image, onClose } = props;

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className={styles.card}>
      <button onClick={handleCloseClick} className={styles.closeButton}>
        X
      </button>
      <h2 className={styles.cardTitle}>Name: {name}</h2>
      <h2 className={styles.cardContent}>Status: {status}</h2>
      <h2 className={styles.cardContent}>Species: {species}</h2>
      <h2 className={styles.cardContent}>Gender: {gender}</h2>
      <h2 className={styles.cardContent}>Origin: {origin.name}</h2>
      <img src={image} alt='' className={styles.cardImage} />
    </div>
  );
}

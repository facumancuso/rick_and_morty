import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from '../Card/Card.module.css'
export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    // axios(`https://rickandmortyapi.com/api/character/${id}`)
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
          setLoaded(true);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
    return () => setCharacter({});
  }, [id]);

  return (
    <div class={styles.card}>
  {loaded ? (
    <div>
      <h1 className={styles.cardContent}>{character.name}</h1>
      <p className={styles.cardContent}>Status: {character.status}</p>
      <p className={styles.cardContent}>Species: {character.species}</p>
      <p className={styles.cardContent}>Gender: {character.gender}</p>
      <p className={styles.cardContent}>Origin: {character.origin?.name}</p>
      <p className={styles.cardContent}>Location: {character.location?.name}</p>
      <img className={styles.cardImage} src={character.image} alt={character.name} />
        </div>
      ):(
        <p>Loading...</p>
        )}
        
        </div>
        );
        }
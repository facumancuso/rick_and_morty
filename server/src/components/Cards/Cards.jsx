import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';
export default function Cards({ characters, onClose, randomCharacter }) {
  const allCharacters = [...characters];

  if (randomCharacter) {
    allCharacters.push(randomCharacter);
  }

  return (
    <div className={styles.cardContainer}>
      {allCharacters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
  const { characters  } = props;

  return (
    <div className={styles.cardContainer}>
      {characters.map((character) => (
        <Card 
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={() => window.alert('Estas cerrando la card')}
        />
      ))}
    </div>
  );
}

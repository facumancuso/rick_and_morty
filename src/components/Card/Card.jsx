import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';

function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props;
  const [isFav, setIsFav] = React.useState(false);

  React.useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === id) {
        setIsFav(true);
        break;
      }
    }
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  const handleCloseClick = () => {
    onClose(id);
  };

  return (
    <div className={styles.card}>
      <button onClick={handleCloseClick} className={styles.closeButton} />
      <Link to={`/detail/${id}`} className={styles.cardTitle}>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt='' className={styles.cardImage} />
      {isFav ? (
        <button onClick={handleFavorite} className={styles.favoriteButton}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={styles.favoriteButton}>
          🤍
        </button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = {
  addFav,
  removeFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
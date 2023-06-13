import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { orderCards, filterCards, removeFav, addFav } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Favorites = ({ myFavorites, removeCharacter }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  const handleRemove = (id) => {
    dispatch(removeFav(id));
  };

  return (
    <div>
      <h1>My Favorites</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        {myFavorites.map((character) => (
          <Card key={character.id} character={character}>
            <button onClick={() => handleRemove(character.id)}>❌</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

const mapDispatchToProps = (dispatch) => ({
  removeCharacter: (id) => dispatch(removeFav(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

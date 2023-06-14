import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import * as actions from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Favorites = ({ myFavorites, orderCards, filterCards }) => {
  const dispatch = useDispatch();

  const handleOrder = useCallback((e) => {
    dispatch(orderCards(e.target.value));
  }, [dispatch, orderCards]);

  const handleFilter = useCallback((e) => {
    dispatch(filterCards(e.target.value));
  }, [dispatch, filterCards]);

  return (
    <div>
      <h1>Mis Favoritos</h1>
      <Link to="/home">
        <button>Inicio</button>
      </Link>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
          <option value="All">Todos</option> {/* Nueva opción para mostrar todos los personajes */}
        </select>
        {myFavorites.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

const mapDispatchToProps = {
  orderCards: actions.orderCards,
  filterCards: actions.filterCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Favorites));

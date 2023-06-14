import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { Link } from "react-router-dom";
// import styles from "../Card/Card.module.css";
// import Cards from "../Cards/Cards";
// import Card from "../Card/Card";
function SearchBar({ onSearch, onAddRandom, logout }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.searchBar}>
      <input
        type="search"
        onChange={handleChange}
        className={style.searchInput}
        value={id}
      />
      <Link to="/home">
        <button onClick={() => onSearch(id)} className={style.searchButton}>
          Add
        </button>
      </Link>
      <Link to="/home">
        <button className={style.searchButton}>Home</button>
      </Link>
      <Link to="/about">
        <button className={style.searchButton}>About</button>
      </Link>
      <Link to="/favorites">
      <button className={style.searchButton}>Favorites</button>
    </Link>
      <button className={style.searchButton} onClick={logout}>
        Log out
      </button>
    </div>
  );
}

export default SearchBar;
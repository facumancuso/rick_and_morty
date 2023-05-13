import React, { useState } from 'react';
import style from './SearchBar.module.css';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = () => {
    props.onSearch(searchTerm);
  };

  return (
    <div className={style.searchBar}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className={style.searchInput}
      />
      <button onClick={handleButtonClick} className={style.searchButton}>
        Agregar
      </button>
    </div>
  );
}

export default SearchBar;
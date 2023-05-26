import { useState } from 'react';
import style from './SearchBar.module.css';

function SearchBar({onSearch, onAddRandom}) {
  const [id, setId] = useState('')
  const handleChange = (event) => {
    setId(event.target.value)
  };
  const [randomCharacter, setRandomCharacter] = useState(null);
  
  const handleAddRandom = () => {
    const randomIndex = Math.floor(Math.random() * 826) + 1;
    fetch(`https://rickandmortyapi.com/api/character/${randomIndex}`)
    .then(response => response.json())
    .then(data => setRandomCharacter(data.name));
  }

  return (
    <div className={style.searchBar}>
      <input
        type="search" onChange={handleChange}
        className={style.searchInput}
      />
      <button onClick={()=> onSearch(id)} className={style.searchButton}>
        Agregar
      </button>
      {/* <button onClick={handleAddRandom} className={style.searchButton}>
        Agregar aleatorio
      </button> */}
    </div>
  );
}

export default SearchBar;
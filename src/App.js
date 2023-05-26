import './App.css'
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([])


  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        if (!characters.some(character => character.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡Este personaje ya está en la lista!');
        }
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    }).catch((error)=>{window.alert('¡No hay personajes con este ID!')});
  };


const onClose = (id)=>{
  const filtered = characters.filter((chars)=> chars.id !== id);
  setCharacters(filtered);
}


  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose = {onClose}/>
    </div>
  );
}

export default App;

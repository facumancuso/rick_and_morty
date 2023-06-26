import React, { useEffect } from 'react';
import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [prevLocation, setPrevLocation] = useState(null);
  const [showSearchBar, setShowSearchBar] = useState(false); 
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'password1';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      setShowSearchBar(true);
      if (prevLocation) {
        setTimeout(() => {
          navigate(prevLocation.pathname);
          setPrevLocation(null);
        }, 100); 
      } else {
        navigate('/home');
      }
    }
  }

  function logout() {
    setAccess(false);
    setShowSearchBar(false); 
    navigate('/');
  }

  useEffect(() => {
    if (!access && location.pathname !== '/') {
      setPrevLocation(location);
      navigate('/');
    }
  }, [access, navigate, location]);

  const onSearch = (id) => {
    // axios(`https://rickandmortyapi.com/api/character/${id}`)
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          if (!characters.some((character) => character.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('¡Este personaje ya está en la lista!');
          }
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        window.alert('¡No hay personajes con este ID!');
      });
  };

  const onClose = (id) => {
    const filtered = characters.filter((chars) => chars.id !== id);
    setCharacters(filtered);
  };

  return (
  <div className='App'>
    {access && showSearchBar && <Nav onSearch={onSearch} logout={logout} />}
    <Routes>
      <Route path='/' element={<Form login={login} />} />
      {access && (
        <>
          <Route path="/favorites" element={<Favorites />} /> 
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        </>
      )}
      <Route path='*' element={<Error />} />
    </Routes>
  </div>
);
}
export default App;
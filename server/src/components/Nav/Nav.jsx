import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom'

const Nav = ({ onSearch, logout }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} logout={logout} />
      
    </div>
  );
}

export default Nav;

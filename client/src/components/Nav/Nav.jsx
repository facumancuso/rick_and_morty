import React from "react";
import SearchBar from '../SearchBar/SearchBar';

const Nav = ({ onSearch, logout }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} logout={logout} />
      
    </div>
  );
}

export default Nav;

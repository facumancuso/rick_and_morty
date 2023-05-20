import React from "react";
import SearchBar from '../SearchBar/SearchBar';

const Nav = () => {

    return (
    <div>
<SearchBar onSearch={(characterID) => window.alert(characterID)} /> 
    </div>
    );
}

export default Nav;
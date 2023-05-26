import React from "react";
import SearchBar from '../SearchBar/SearchBar';

const Nav = ({onSearch}) => {

    return (
    <div>
<SearchBar onSearch={onSearch} /> 
    </div>
    );
}


// class Nav extends React.Components {

// }

export default Nav;
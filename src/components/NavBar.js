import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const toggleSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    }

    return (
        <div className="navbar">
            <Link to="/"><img alt="screenbites_logo" src="../logo_svg.svg" width="15%" /></Link>
            <Link to="/recipes"><h1>Receitas</h1></Link>
            <h1>Notícias</h1>
            <div className={`search-container ${showSearchBar ? 'show-search-bar' : ''}`}>
                {showSearchBar && (
                    <input
                        type="text"
                        placeholder="Search Recipes"
                        className="search-bar"
                    />
                )}
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={toggleSearchBar} />
            </div>
        </div>
    );
}

export default NavBar;
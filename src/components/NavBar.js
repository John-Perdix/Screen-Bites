import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [query, setQuery] = useState('');

    const navigate = useNavigate()

    const toggleSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    }

    const handleSubmit = async (value) => {
        setQuery(value);
        navigate(`/recipes?search=${query}`);
    };

    return (
        <div className="navbar">
            <div width="100%" style={{ padding: 0 }}>
                <Link to="/"><img alt="screenbites_logo" src="../logo_svg.svg" width="15%" /></Link>
            </div>

            <div width="100%">
                <Link to="/recipes"><h1>Recipes</h1></Link>
            </div>
            <div width="100%">
                <Link to="/about"><h1>About</h1></Link>
            </div>

            <div width="100%" className={`search-container ${showSearchBar ? 'show-search-bar' : ''}`}>
                {showSearchBar && (
                    <form
                        onInput={(e) => {
                            e.preventDefault();
                            handleSubmit(e.target.value);
                        }}>
                        <input
                            type="text"
                            placeholder="Search Recipes"
                            className="search-bar"
                        />
                    </form>
                )}
                <button className="search-button" onClick={toggleSearchBar}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    );
}

export default NavBar;
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [query, setQuery] = useState('');
    const [backgroundColor, setBackgroundColor] = useState(null);

    const navigate = useNavigate();
    const searchRef = useRef(null); // Create a reference for the search input

    useEffect(() => {
        if (showSearchBar && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showSearchBar]);

    const toggleSearchBar = (e) => {
        if (query.trim() === '') {
            setShowSearchBar(!showSearchBar); // Toggle visibility only when the search bar is empty
            setBackgroundColor(showSearchBar ? null : '#fddad6');;
        } else {
            navigate(`/recipes?search=${query}`); // Search when there's text in the input field
        }
    }

    const toggleSearchMenu = () => {
        setShowMenu(!showMenu); // Toggle visibility only when the search bar is empty
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
            navigate(`/recipes?search=${query}`); // Navigate to the results page when the button is clicked
        }
    };

    return (
        <div className="navbar">
            <div className="nav-items">
            <div className="burger-icon">
                <button onClick={toggleSearchMenu}><FontAwesomeIcon icon={faBurger} /></button>
            </div>

            <div className="logo-parent" style={{ padding: 0 }}>
                <Link to="/"><img alt="screenbites_logo" src="../logo_svg.svg" width="15%" /></Link>
            </div>

                    <div className="link-nav">
                        <Link to="/recipes"><h1>Recipes</h1></Link>
                    </div>

                    <div className="link-nav">
                        <Link to="/about"><h1>About</h1></Link>
                    </div>


            <div className={`search-container ${showSearchBar ? 'show-search-bar' : ''}`}>
                <div style={{ backgroundColor }} className="search-button">
                    {showSearchBar && (
                        <form
                            /*onInput={(e) => {
                                e.preventDefault();
                                handleSubmit(e.target.value);
                            }}*/

                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                placeholder="Search Recipes"
                                //className="search-bar"
                                className={`search-bar ${showSearchBar ? 'active' : ''}`}
                                value={query} // Bind input value to the query state
                                onChange={(e) => setQuery(e.target.value)} // Update query state on input change
                                //onClick={(e) => e.stopPropagation()} // Prevent click inside input from closing the search bar
                                ref={searchRef}
                            />
                        </form>
                    )}
                    <button className="search-button" onClick={toggleSearchBar}>
                        <span><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#3D3737' }} /></span>
                    </button>
                </div>
            </div>
            </div>
            {showMenu && (
                <div className={`menu-container ${showMenu ? 'show-menu' : ''}`}>
                    <div>
                        <Link to="/recipes"><h1>Recipes</h1></Link>
                    </div>

                    <div>
                        <Link to="/about"><h1>About</h1></Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;
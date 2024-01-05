import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
            <div class="navbar">
                <Link to="/"><img alt="screenbites_logo" src="recursos/logo1.png" width="2%" height="3%"/></Link>
                    <h1>Receitas</h1>
                    <h1>Notícias</h1>
                    <span class="material-symbols-outlined">search</span>
            </div>
    );
}

export default NavBar;
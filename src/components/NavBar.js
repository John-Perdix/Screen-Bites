import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
            <div className="navbar">
                <Link to="/"><img alt="screenbites_logo" src="../logo_svg.svg" width="2%" height="3%"/></Link>
                    <h1>Receitas</h1>
                    <h1>Notícias</h1>
                    <span className="material-symbols-outlined">search</span>
            </div>
    );
}

export default NavBar;
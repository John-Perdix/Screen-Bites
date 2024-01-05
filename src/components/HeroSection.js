import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <>
            <div className="conteudo-imagem">
                <img alt="thebigsalad" src="recursos/the_big_salad.png" width="100%" height="" />
            </div>
            <div className="home-conteudo-parent">
                <div className="home-conteudo-child">
                    <h1>The Big Salad</h1>
                    <h2>Seinfeld, "The Big Salad"</h2>
                    <p><span className="material-symbols-outlined">
                        eco
                    </span>Vegan <span className="material-symbols-outlined">Timer</span>10min.</p>
                </div>
                <div className="home-conteudo-child2">
                    <Link to="/receita"><h1>Ver Receita</h1></Link>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
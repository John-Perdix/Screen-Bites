import React from "react";

const HeroSection = () => {
    return (
        <>
            <div class="conteudo-imagem">
                <img alt="thebigsalad" src="recursos/the_big_salad.png" width="100%" height="" />
            </div>
            <div class="home-conteudo-parent">
                <div class="home-conteudo-child">
                    <h1>The Big Salad</h1>
                    <h2>Seinfeld, "The Big Salad"</h2>
                    <p><span class="material-symbols-outlined">
                        eco
                    </span>Vegan <span class="material-symbols-outlined">Timer</span>10min.</p>
                </div>
                <div class="home-conteudo-child2">
                    <h1>Ver Receita</h1>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
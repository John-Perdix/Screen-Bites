import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const HeroSection = ({recipes}) => {
    useEffect(() => {

    }, [recipes])
    console.log(recipes);

    return (
        <>
{/*             <div className="conteudo-imagem">
                <img alt="thebigsalad" src="recursos/the_big_salad.png" width="100%" height="" />
            </div> */}
             {recipes && recipes.length > 0 ? (
                recipes.map((object) => (
            <div key={object.id} className="home-conteudo-parent" style={{backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 100%)), url(${object.metadata.image.url})`}} >
                <div className="home-conteudo-child">
                    <h1>{object.title}</h1>
                    <h2>{object.metadata.movie.title}</h2>
                    <p><FontAwesomeIcon icon={faClock} /> &nbsp; {object.metadata.duration} min</p>
                </div>
                <div className="home-conteudo-child2">
                    <Link to={`/recipe/${object.id}`}><h1>Ver Receita</h1></Link>
                </div>
            </div>
            ))
            ) : (
                <h2>There is nothing to see here</h2>

            )}
        </>
    );
}

export default HeroSection;
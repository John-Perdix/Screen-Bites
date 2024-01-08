import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Recipe = () => {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams(); //Access URL parameter

    const fetchRecipe = async () => {
        await fetch('https://api.cosmicjs.com/v3/buckets/screen-bites-production/objects?pretty=true&query=%7B%22type%22:%22recipes%22%7D&limit=10&read_key=AKHFpPAIGewG9wW7Lg0XT3Q4lNOynoAFvZiCOvAuAYzY6p9yfJ&depth=1&props=slug,title,metadata,id')
            .then(response => response.json())
            .then(result => {
                setRecipe(result.objects);
                
            });
    }

    useEffect(() => {
        fetchRecipe();
    }, [])

    const filteredRecipe = recipe ? recipe.filter(obj => obj.id === id) : null;

    //para aplicar o HTML em vez de escrever diretamente as tags
    const createMarkup = (html) => {
        return { __html: html };
    };

    return (
        <>
            {filteredRecipe && filteredRecipe.length > 0 ? (
                filteredRecipe.map((object) => (
                    <div key={object.id} className="body-receita">
                        <div className="topo-imagem" style={{backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 100%)), url('${object.metadata.image.url}')`}}>
                            {/* <img alt={object.title} src={object.metadata.image.url} width="100%" height="900em" /> */}
                            <div className="title">
                                <h1>{object.title}</h1>
                                <h2>{object.metadata.movie.title}</h2>
                            </div>
                        </div>
                        <div className="conteudo">
                            <div className="conteudo-esquerda">
                                <h2>Ingredients</h2>
                                <p dangerouslySetInnerHTML={createMarkup(object.metadata.ingredients)}></p>
                            </div>
                            <div className="vl"></div>
                            <div className="conteudo-direita">
                                <h2>Preparation</h2>
                                <p dangerouslySetInnerHTML={createMarkup(object.metadata.preparation)}></p>
                            </div>
                        </div>
                        <div className="recipe-cook">
                            <h1>Cooked By</h1>
                            <div className="recipe-cook-child">
                                <img alt={object.metadata.cook.title} src={object.metadata.cook.metadata.image.url} width="100%" height="900em" />
                                <p>{object.metadata.cook.title}</p>
                            </div>
                        </div>
                    </div>

                ))
            ) : (
                <h2>No recipes available</h2>
            )}
        </>
    );
}

export default Recipe;
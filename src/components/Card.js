import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = () => {

    const [recipe, setRecipe] = useState([]);

    //Fetch Receitas
    const fetchRecipes = async () => {
        await fetch('https://api.cosmicjs.com/v3/buckets/screen-bites-production/objects?pretty=true&query=%7B%22type%22:%22recipes%22%7D&limit=10&read_key=AKHFpPAIGewG9wW7Lg0XT3Q4lNOynoAFvZiCOvAuAYzY6p9yfJ&depth=1&props=slug,title,metadata,') // Fetch the first page to get the total number of pages
            .then(response => response.json())
            .then(result => {
                const shuffledRecipes = result.objects.sort(() => Math.random() - 0.5);
                const selectedRecipes = shuffledRecipes.slice(0, 3);
                setRecipe(selectedRecipes);
            });
    }

    useEffect(() => {
        fetchRecipes();

    }, [])

    return (
        <>
            {recipe && recipe.length > 0 ? (
                recipe.map((object) => (
                    <div className="card-child" key={object._id}>
                        <div className="card-child-img">
                            <img alt={object.title} src={object.metadata.image.url} width="100%" height="" />
                        </div>
                        <div className="card-child-info">
                            <h1>{object.title}</h1>
                            <h2>{object.metadata.movie.title}</h2>
                            <div className="card-child-bt">
                                <Link to="/receita">
                                    <h2>Ver Receita</h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h2>There is nothing to see here</h2>

            )}
        </>
    );
}

export default Card;
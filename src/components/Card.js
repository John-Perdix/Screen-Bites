import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = () => {

    const [recipe, setRecipe] = useState(null);

    //fetch news
    const fetchRecipes = async () => {
        await fetch('https://api.cosmicjs.com/v3/buckets/screen-bites-production/objects?pretty=true&query=%7B%22type%22:%22recipes%22%7D&limit=10&read_key=AKHFpPAIGewG9wW7Lg0XT3Q4lNOynoAFvZiCOvAuAYzY6p9yfJ&depth=1&props=slug,title,metadata,') // Fetch the first page to get the total number of pages
            .then(response => response.json())
            .then(result => {
                setRecipe(result.objects);
            });
    }

    useEffect(() => {
        fetchRecipes();

    }, [])

    return (
        //<Link key={recipe.id} to={`/characters/${recipe.id}`}>
        <div className="card-child">
            <div className="card-child-img">
                <img alt="krabby patty" src="recursos/krabbyPatty.jpg" width="100%" height="" />
            </div>
            <div className="card-child-info">
                <h1>Krabby Patty</h1>
                <h2>SpongeBob</h2>
                <a href="Receita.html">
                    <div className="card-child-bt">
                        <h2>Ver Receita</h2>
                    </div>
                </a>
            </div>
        </div>
        //</Link>
    );
}

export default Card;
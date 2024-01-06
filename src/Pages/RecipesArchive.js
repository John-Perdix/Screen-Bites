import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const RecipesArchive = () => {
    const [recipe, setRecipe] = useState([]);

    //Fetch Receitas
    const fetchRecipes = async () => {
        await fetch('https://api.cosmicjs.com/v3/buckets/screen-bites-production/objects?pretty=true&query=%7B%22type%22:%22recipes%22%7D&limit=10&read_key=AKHFpPAIGewG9wW7Lg0XT3Q4lNOynoAFvZiCOvAuAYzY6p9yfJ&depth=1&props=slug,title,metadata,id,') // Fetch the first page to get the total number of pages
            .then(response => response.json())
            .then(result => {
                setRecipe(result.objects);
                console.log(result.objects)
            });
    }

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div className="card-parent">
            <Card recipes={recipe} />
        </div>
    );
}

export default RecipesArchive;
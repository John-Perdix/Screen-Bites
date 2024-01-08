import React from "react";
import { useEffect, useState} from "react";
import Card from "../components/Card";
import { useLocation } from 'react-router-dom';

const RecipesArchive = () => {
    const [loading, setLoading] = useState(true);//define the loading inicially to true
    const [recipe, setRecipe] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('search');

    //Fetch Receitas
    const fetchRecipes = async () => {
        setLoading(true);
        await fetch('https://api.cosmicjs.com/v3/buckets/screen-bites-production/objects?pretty=true&query=%7B%22type%22:%22recipes%22%7D&limit=none&read_key=AKHFpPAIGewG9wW7Lg0XT3Q4lNOynoAFvZiCOvAuAYzY6p9yfJ&depth=1&props=slug,title,metadata,id,') // Fetch the first page to get the total number of pages
            .then(response => response.json())
            .then(result => {
                setRecipe(result.objects);
                console.log(result.objects);
                setLoading(false);
            });
    }

    const getFilteredItems = (query, recipes) => {
        if (!query || query.trim() === '') {
            return recipes;
        } else {
            return recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(query.toLowerCase()) ||
                (recipe.metadata && recipe.metadata.movie && recipe.metadata.movie.title.toLowerCase().includes(query.toLowerCase()))
            );
        }
    }
    const filteredItems = getFilteredItems(query, recipe)

    useEffect(() => {
        fetchRecipes();
    }, []);

    const list = !loading ? (
        <div className="card-parent wrap home-conteudo">
            <Card recipes={filteredItems} />
        </div>
    ) : (
        <div className='padding-2 margin-auto'>
            <p>Loading...</p>
        </div>
    )

    return (
        <div className="body-arquivo">
            <div className="card-parent">
                {list}
            </div>
        </div>
    );

}
export default RecipesArchive;
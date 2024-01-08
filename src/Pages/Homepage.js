import React from "react";
import { useState, useEffect } from "react";
//import components
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import News from "../components/News";
import Cooks from "../components/Cooks";

const Homepage = () => {

    const [recipe, setRecipe] = useState([]);
    const [recipe1, setRecipe1] = useState([]);

    //Fetch Receitas
    const fetchRecipes1 = async () => {
        await fetch('https://api.cosmicjs.com/v3/buckets/screen-bites-production/objects?pretty=true&query=%7B%22type%22:%22recipes%22%7D&limit=10&read_key=AKHFpPAIGewG9wW7Lg0XT3Q4lNOynoAFvZiCOvAuAYzY6p9yfJ&depth=1&props=slug,title,metadata,id,') // Fetch the first page to get the total number of pages
            .then(response => response.json())
            .then(result => {
                const shuffledRecipes = result.objects.sort(() => Math.random() - 0.5);
                const selectedRecipes = shuffledRecipes.slice(0, 1);
                setRecipe1(selectedRecipes);
            });
    }

    //Fetch Receitas
    const fetchRecipes = async () => {
        await fetch('https://api.cosmicjs.com/v3/buckets/screen-bites-production/objects?pretty=true&query=%7B%22type%22:%22recipes%22%7D&limit=10&read_key=AKHFpPAIGewG9wW7Lg0XT3Q4lNOynoAFvZiCOvAuAYzY6p9yfJ&depth=1&props=slug,title,metadata,id,') // Fetch the first page to get the total number of pages
            .then(response => response.json())
            .then(result => {
                const shuffledRecipes = result.objects.sort(() => Math.random() - 0.5);
                const selectedRecipes = shuffledRecipes.slice(0, 3);
                setRecipe(selectedRecipes);
            });
    }

    useEffect(() => {
        fetchRecipes();
        fetchRecipes1();
      }, []);

    return (
        <div>
            <div className="home-conteudo margin-top-bottom">
                <HeroSection recipes={recipe1}/>
                <div className="card-parent">
                    <Card recipes={recipe} />
                </div>
            </div>
            <News/>
            <Cooks/>
        </div>
    );
}

export default Homepage;
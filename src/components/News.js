import React, { useEffect } from "react";
import { useState } from "react";



const News = () => {
    const [news, setNews] = useState(null);

    //fetch news
    const fetchNews = async () => {
        await fetch('https://api.cosmicjs.com/v3/buckets/screen-bites-production/objects?pretty=true&query=%7B%22type%22:%22news%22%7D&limit=10&read_key=AKHFpPAIGewG9wW7Lg0XT3Q4lNOynoAFvZiCOvAuAYzY6p9yfJ&depth=1&props=slug,title,metadata,') // Fetch the first page to get the total number of pages
            .then(response => response.json())
            .then(result => {
                setNews(result.objects);
            });
    }

    useEffect(() => {
        fetchNews();

    }, [])



    return (
        <div class="noticias-parent">
            <div class="noticias-titulo">
                <h1>News</h1>
            </div>
            <div class="noticias-child">
                <div class="noticias-child-esq">
                    <img alt="melissa thompson" src="recursos/noticia1.jpg" width="100%" height="" />
                </div>
                <div class="noticias-child-dir">
                    <h1>{news.title}</h1>
                    <p></p>
                </div>
            </div>
            <div class="noticias-child">
                <div class="noticias-child-esq">
                    <h1>We tested recipes from these new cookbooks so you don’t have to</h1>
                    <p>In a new series testing out cookbooks so you don’t have to, Olivia Campbell tries out
                        a recipe from the gods, traces the history of nutmeg and turns that tin of beans in
                        the back of the cupboard into a gourmet dinner</p>
                </div>
                <div class="noticias-child-dir">
                    <img alt="melissa thompson" src="recursos/noticia1.jpg" width="100%" height="" />
                </div>
            </div>
        </div>
    );
}

export default News;
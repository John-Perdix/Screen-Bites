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
        <div className="noticias-parent">
            <div className="noticias-titulo">
                <h1>News</h1>
            </div>
            {news && news.length > 0 ? (
                news.map((object, index) => (
                    index % 2 === 0 ? (
                        <div key={index} className="noticias-child">
                            <div className="noticias-child-esq">
                                <img alt={object.title} src={object.metadata.image.url} width="100%" height="" />
                            </div>
                            <div className="noticias-child-dir">
                                <h1>{object.title}</h1>
                                <p>{object.metadata.newstext}</p>
                            </div>
                        </div>
                    ) : (
                        <div key={index} className="noticias-child">
                            <div className="noticias-child-esq">
                            <h1>{object.title}</h1>
                                <p>{object.metadata.newstext}</p>
                            </div>
                            <div className="noticias-child-dir">
                            <img alt={object.title} src={object.metadata.image.url} width="100%" height="" />
                            </div>
                        </div>
                    )
                ))
            ) : (
                <h2>There is nothing to see here</h2>
            )}
        </div>
    );
}

export default News;
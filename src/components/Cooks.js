import React from "react";
import { useState, useEffect} from "react";

const Cooks = () => {
    const [cooks, setCooks] = useState(null);

    //fetch news
    const fetchCooks = async () => {
        await fetch('https://api.cosmicjs.com/v3/buckets/screen-bites-production/objects?pretty=true&query=%7B%22type%22:%22cooks%22%7D&limit=10&read_key=AKHFpPAIGewG9wW7Lg0XT3Q4lNOynoAFvZiCOvAuAYzY6p9yfJ&depth=1&props=slug,title,metadata,') // Fetch the first page to get the total number of pages
            .then(response => response.json())
            .then(result => {
                setCooks(result.objects.slice(0, 3));
            });
    }

    useEffect(() => {
        fetchCooks();
    }, [])

    return (
        < div className="cooks-parent" >
            <div className="cooks-titulo">
                <h1>Cooks of the Week</h1>
            </div>
            {cooks && cooks.length > 0 ? (
                cooks.map((object) => (
                    <div className="cooks-child" key={object._id}>
                        <div className="cooks-child-1">
                            <div className="cooks-child-img">
                                <img alt={object.title} src={object.metadata.image.url} width="100%" height="100%" />
                            </div>
                            <div className="cooks-child-info">
                                <h2>{object.title}</h2>
                                <p>{object.recipe && <p>{object.recipe.length}</p>}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h2>No Cooks Available</h2>
            )}
        </div >
    );
}
export default Cooks;
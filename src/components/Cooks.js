import React from "react";
import { useState, useEffect} from "react";

const Cooks = () => {
    const [cooks, setCooks] = useState(null);

    //fetch cooks
    const fetchCooks = async () => {
        await fetch('https://api.cosmicjs.com/v3/buckets/screen-bites-production/objects?pretty=true&query=%7B%22type%22:%22cooks%22%7D&limit=10&read_key=AKHFpPAIGewG9wW7Lg0XT3Q4lNOynoAFvZiCOvAuAYzY6p9yfJ&depth=1&props=slug,title,metadata,id,') // Fetch the first page to get the total number of pages
            .then(response => response.json())
            .then(result => {
                setCooks(result.objects.slice(0, 4));
            });
    }

    useEffect(() => {
        fetchCooks();
    }, [])

    return (
        < div className="cooks-parent margin-top-bottom" >
            <div className="cooks-titulo">
                <h1>Cooks of the Week</h1>
            </div>
            <div className="cooks-child">
            {cooks && cooks.length > 0 ? (
                cooks.map((object) => (
                    <div key={object.id}>
                        <div>
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
            </div>
        </div >
    );
}
export default Cooks;
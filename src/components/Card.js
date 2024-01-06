import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Card = ({recipes} ) => {
      
    useEffect(() => {

    }, [recipes])


    return (
        <>
            {recipes && recipes.length > 0 ? (
                recipes.map((object) => (
                    <div className="card-child" key={object.id}>
                        <div className="card-child-img">
                            <img alt={object.title} src={object.metadata.image.url} width="100%" height="" />
                        </div>
                        <div className="card-child-info">
                            <h1>{object.title}</h1>
                            <h2>{object.metadata.movie.title}</h2>
                            <div className="card-child-bt">
                                <Link to={`/recipe/${object.id}`}>
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
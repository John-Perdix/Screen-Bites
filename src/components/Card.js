import React from "react";

const Card = () => {
    return (
        <div class="card-child">
            <div class="card-child-img">
                <img alt="krabby patty" src="recursos/krabbyPatty.jpg" width="100%" height="" />
            </div>
            <div class="card-child-info">
                <h1>Krabby Patty</h1>
                <h2>SpongeBob</h2>
                <a href="Receita.html">
                    <div class="card-child-bt">
                        <h2>Ver Receita</h2>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Card;
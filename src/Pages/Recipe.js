import React from "react";

const Recipe = () => {
    return(
        <div className="body-receita">
    <div className="topo-imagem">
        <img alt="krabby patty" src="recursos/krabbyPatty.jpg" width="100%" height="900em"/>
        <div className="info-imagem">
            <h1>Krabby Patty</h1>
            <h2>SpongeBob</h2>
        </div>
    </div>
    <div className="conteudo">
        <div className="conteudo-esquerda">
            <h2>Ingredientes</h2>
            <p>400g Carne Picada</p>
            <p>Quejijo Cheddar</p>
            <p>Pão Brioche</p>
            <p>Alface Iceberg</p>
            <p>Ketchup</p>
            <p>Maionese</p>
            <p>Mostarda</p>
            <p>Bacon</p>
            <p>Manteiga</p>
        </div>
        <div className="vl"></div>
        <div className="conteudo-direita">
            <h2>Preparação</h2>
            <h3>Passo 1.</h3>
            <p>Barrar o pão com maionese e tostá-lo.</p>
            <h3>Passo 2.</h3>
            <p>Dividir a carne em 4 bolas iguais e temperá-las a gosto.</p>
            <h3>Passo 3.</h3>
            <p>Colocar a carne na manteiga derretida e espalmá-la com a espátula. Adicionar o bacon.</p>
            <h3>Passo 4.</h3>
            <p>Misturar os molhos numa taça e colocar na base do pão.</p>
            <h3>Passo 5.</h3>
            <p>Colocar o bacon por cima do hamburger e depois o queijo. Tapar a frigideira para derreter o queijo.</p>
            <h3>Passo 6.</h3>
            <p>Colocar o hamburger no pão e a alface por cima.</p>
            <h3>Passo 7.</h3>
            <p>Desfrutar com acompanhamento de batatas fritas.</p>
        </div>
    </div>
    <div className="video-receita1">
        <div>
            <iframe width="698" height="389" src="https://www.youtube.com/embed/7EnWiGYT1g4?si=KeAZjPDFZafbRyf6"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen className="video-video"></iframe>
        </div>
        <div className="video-texto">
            <h2>Vídeo com receita</h2>
            <p>Don’t let plankton know we’ve cracked the recipe.</p>
            <p><span className="material-symbols-outlined">Timer</span> 40 min. <span
                    className="material-symbols-outlined">restaurant</span> 2 Portions</p>
        </div>
    </div>
    <div className="video-receita2">
        <div className="video-texto2">
            <h2>The Lore</h2>
            <p>The Krabby Patty, an iconic creation from the animated world of Bikini Bottom, is a delectable 
                burger that has captured the hearts and taste buds of fans worldwide. Served exclusively at the 
                Krusty Krab, under the entrepreneurial eye of Mr. Krabs, this culinary masterpiece is known for 
                its secret formula, tantalizing aroma, and its central role in the ongoing rivalry between 
                Mr. Krabs and Plankton.</p>
        </div>
        <div className="video-texto3">
            <h2>Did you know krabby patty is a vegan burguer?</h2>
            <p>Thats right,  spongeBob brought to the seas the woke culture where the famous burguer krabby 
                patty does not have a “patty”.</p>
        </div>
    </div>
    <div className="video-receita3">
        <div className="video-texto3">
            <h2>The secret formula</h2>
            <p>The secret formula of the Krabby Patty, guarded with utmost secrecy by Mr. Krabs, adds an 
                element of mystery and intrigue to the beloved burger. The Krusty Krab, with its distinctive 
                nautical theme and dedicated staff led by SpongeBob SquarePants, serves as the epicenter of 
                Krabby Patty production and community gathering in Bikini Bottom.</p>
        </div>
    </div>
</div>
    );
}

export default Recipe;
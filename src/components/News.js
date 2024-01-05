import React from "react";

const News = () =>{
    return(
        <div class="noticias-parent">
        <div class="noticias-titulo">
            <h1>News</h1>
        </div>
        <div class="noticias-child">
            <div class="noticias-child-esq">
                <img alt="melissa thompson" src="recursos/noticia1.jpg" width="100%" height="" />
            </div>
            <div class="noticias-child-dir">
                <h1>Melissa Thompson: ‘You can’t tell the story of Jamaican food without talking about slavery’</h1>
                <p>The food writer talks to Prudence Wade about exploring the history of Jamaica and its food
                    for her new book, how it compares to the UK and why you should never, ever mess with jerk.</p>
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
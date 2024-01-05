import React from "react";
//import components
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import News from "../components/News";
import Cooks from "../components/Cooks";

const Homepage = () => {
    return (
        <body class="body-home">
            <div class="home-conteudo">
                <HeroSection />
                <div class="card-parent">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <News/>
            <Cooks/>
        </body>
    );
}

export default Homepage;
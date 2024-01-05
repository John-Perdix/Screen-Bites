import React from "react";
//import components
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import News from "../components/News";
import Cooks from "../components/Cooks";

const Homepage = () => {
    return (
        <div className="body-home">
            <div className="home-conteudo">
                <HeroSection />
                <div className="card-parent">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <News/>
            <Cooks/>
        </div>
    );
}

export default Homepage;
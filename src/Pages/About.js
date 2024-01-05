import React from "react";

const About = () => {
    return (
        <div className="body-about">
            <div className="about-parent">
                <div className="about-child">
                    <h1>Sobre</h1>
                    <p>Somos uma empresa independente com uma paixão por cultura popular e gastronomia.</p>
                </div>
                <div className="about-child2">
                    <h1>Quem <br /> Somos?</h1>
                    <img alt="quem_somos" src="recursos/quem_somos.png" width="35%" height="35%" />
                </div>
                <div className="about-child3">
                    <div className="about-child-esq">
                        <h1>Contactos</h1>
                    </div>
                    <div className="about-child-dir">
                        <h2>E-mail</h2>
                        <p>screenbites@business.com</p>
                        <h2>Telefone</h2>
                        <p>234 567 389</p>
                        <h2>Morada</h2>
                        <p>Largo da Velha, 5600</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
import React from "react";

const About = () => {
    return (
        <div className="body-about">
            <div className="about-parent">
                <div className="about-child">
                    <h1>About Us</h1>
                    <p>We're an independent company with a passion for pop culture and gastronomy</p>
                </div>
                <div className="about-child2">
                    <h1>Who are <br /> We?</h1>
                    <img alt="quem_somos" src="recursos/quem_somos.png" width="35%" height="35%" />
                </div>
                <div className="about-child3">
                    <div className="about-child-esq">
                        <h1>Contacts</h1>
                    </div>
                    <div className="about-child-dir">
                        <h2>E-mail</h2>
                        <p>screenbites@business.com</p>
                        <h2>Cellphone</h2>
                        <p>234 567 389</p>
                        <h2>Address</h2>
                        <p>Largo da Velha, 5600</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
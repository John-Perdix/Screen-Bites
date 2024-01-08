import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrap footer-child">
                <div>
                    <h1>Contactos</h1>
                    <h2>E-mail</h2>
                    <p>screenbites@business.com</p>
                    <h2>Telefone</h2>
                    <p>234 567 389</p>
                    <h2>Morada</h2>
                    <p>Largo da Velha, 5600</p>
                </div>
                <div>
                    <h1>Páginas</h1>
                    <h2>Página Inicial</h2>
                    <h2>Receitas</h2>
                    <h2><a href="about.html">Sobre</a></h2>
                    <h2>Notícias</h2>
                    <h2>Arquivo</h2>
                </div>
                <div className="footer-img">
                    <img alt="screenbites_logo" src="../logo_svg_branco.svg"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
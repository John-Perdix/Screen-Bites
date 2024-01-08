import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <div className="wrap footer-child">
                <div>
                    <h1>Contacts</h1>
                    <h2>E-mail</h2>
                    <p>screenbites@business.com</p>
                    <h2>Cellphone</h2>
                    <p>234 567 389</p>
                    <h2>Address</h2>
                    <p>Largo da Velha, 5600</p>
                </div>
                <div>
                    <h1>Pages</h1>
                    <h2><Link to={'/'}>Homepage</Link></h2>
                    <h2><Link to={'/recipes'}>Recipes</Link></h2>
                    <h2><Link to={'/about'}>About Us</Link></h2>
                    {/*<h2><Link to={'/recipes'}>Arquive</Link></h2>*/}
                </div>
                <div className="footer-img">
                    <Link to={'/'}><img alt="screenbites_logo" src="../logo_svg_branco.svg"/></Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
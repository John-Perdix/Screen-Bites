import React from "react";

const Cooks = () => {
    return(
        <div className="cooks-parent">
                <div className="cooks-titulo">
                    Cooks of the Week
                </div>
                <div className="cooks-child">
                    {/* <!--ERRO: Estas divs têm altura a mais--> */}
                    <div className="cooks-child-1">
                        <div className="cooks-child-img">
                            <img alt="spongebob" src="recursos/Spongebob.webp" width="100%" height="100%" />
                        </div>
                        <div className="cooks-child-info">
                            <h2>SpongeBob</h2>
                            <p>3 Receitas</p>
                        </div>
                    </div>
                    <div className="cooks-child-1">
                        <div className="cooks-child-img">
                            <img alt="Julian Slowik" src="recursos/Julian Slowik.webp" width="100%" height="100%" />
                        </div>
                        <div className="cooks-child-info">
                            <h2>Julian Slowik</h2>
                            <p>2 Receitas</p>
                        </div>
                    </div>
                    <div className="cooks-child-1">
                        <div className="cooks-child-img">
                            <img alt="Paulie Cicero" src="recursos/Paulie Cicero.webp" width="100%" height="100%" />
                        </div>
                        <div className="cooks-child-info">
                            <h2>Paulie Cicero</h2>
                            <p>1 Receitas</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Cooks;
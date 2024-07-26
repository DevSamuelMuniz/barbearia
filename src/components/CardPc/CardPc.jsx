import React from "react";
//css
import "./CardPc.css"

function CardPc({ nome, barbeiro, hora }) {
    return (
        <main className="main-card">
            <div className="card-left">
                <h1 className="nome-card">{nome}</h1>
                <h2 className="barbeiro-card">{barbeiro}</h2>
            </div>

            <div className="card-right">
                <h2 className="hora-card">{hora}</h2>
                <button className="btn-card">FINALIZADO</button>
            </div>

        </main>
    );
}

export default CardPc;
import React from "react";

import "./Financeiro.css"
import Header from "../../components/Header/Header";

function Financeiro() {

    return (
        <main className="main-financeiro">
            <div className="header">
                <Header />
            </div>
            <div className="container-financeiro">
                <h1 className="title-financeiro">FINANCEIRO</h1>
                <div className="ctn-filtro ctn-financeiro">
                    <div className="filtro-pc">10/04/2001</div>
                    <div className="filtro-pc">MAIS RECENTE</div>
                </div>
            </div>

            <div className="container-card-financeiro">
                <div className="card-left">
                    <h1 className="nome-card nome-financeiro">SAMUEL MUNIZ DA SILVA</h1>
                    <h2 className="barbeiro-card financeiro-card">BARBEIRO SEILA</h2>
                </div>

                <div className="card-mid">
                    <h2 className="hora-card">16:58H</h2>
                </div>

                <div className="card-rigth">
                    <h2 className="total-card">TOTAL:</h2>
                    <h2 className="valor-card">R$ 350,40</h2>
                </div>
            </div>
        </main>
    );
}

export default Financeiro
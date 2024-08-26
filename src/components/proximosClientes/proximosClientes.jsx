import React, { useState } from "react";

//css
import "./proximosClientes.css"

//components
import CardPc from "../CardPc/CardPc";

const date = '10/11/2023'
const filtro = 'Mais recentes'

function ProximosClientes() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const dados = [
        { nome: '', barbeiro: '', hora: '' }
    ];

    const itemsPerPage = 3;
    const startIndex = currentIndex * itemsPerPage;
    const selectedCards = dados.slice(startIndex, startIndex + itemsPerPage);

    return (
        <main className="main-pc">
            <div>
                <h1 className="title-pc">PRÓXIMOS CLIENTES</h1>
            </div>

            <div className="card-ctn scroll">
                {selectedCards.map((card, index) => (
                    <CardPc
                        key={index}
                        nome={card.nome}
                        barbeiro={card.barbeiro}
                        hora={card.hora}
                    />
                ))}
            </div>

        </main>
    )
}

export default ProximosClientes;

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
    const totalPages = Math.ceil(dados.length / itemsPerPage);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
    };

    const startIndex = currentIndex * itemsPerPage;
    const selectedCards = dados.slice(startIndex, startIndex + itemsPerPage);

    return (
        <main className="main-pc">
            <div>
                <h1 className="title-pc">PRÓXIMOS CLIENTES</h1>
                <div className="ctn-filtro">
                    <div className="filtro-pc">{date}</div>
                    <div className="filtro-pc">{filtro}</div>
                </div>
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

            <div className="pagination-buttons">
                <button className="btn-next" onClick={handlePrev} disabled={currentIndex === 0}>Anterior</button>
                <button className="btn-next" onClick={handleNext} disabled={currentIndex === totalPages - 1}>Próximo</button>
            </div>
        </main>
    )
}

export default ProximosClientes;

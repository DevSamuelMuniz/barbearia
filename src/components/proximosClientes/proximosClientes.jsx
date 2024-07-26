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
        { nome: 'SAMUEL MUNIZ DA SILVA', barbeiro: 'BARB. MATHEUS', hora: '10:40' },
        { nome: 'JOÃO DA SILVA', barbeiro: 'BARB. CARLOS', hora: '11:00' },
        { nome: 'MARIA OLIVEIRA', barbeiro: 'BARB. PEDRO', hora: '11:30' },
        { nome: 'ANA COSTA', barbeiro: 'BARB. JOÃO', hora: '12:00' },
        { nome: 'LUIS SANTOS', barbeiro: 'BARB. LUCAS', hora: '12:30' },
        { nome: 'CARLA FERREIRA', barbeiro: 'BARB. DIEGO', hora: '13:00' },
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

            <div className="card-ctn">
                {selectedCards.map((card, index) => (
                    <CardPc
                        key={index}
                        nome={card.nome}
                        barbeiro={card.barbeiro}
                        hora={card.hora}
                        situacao="PENDENTE"
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

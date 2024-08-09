import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Financeiro.css"
import Header from "../../components/Header/Header";

function Financeiro() {
    const navigate = useNavigate();

    const [financeiros, setFinanceiros] = useState([]);
    const [selectedAgendamento, setSelectedAgendamento] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/financeiros')
            .then(response => {
                setFinanceiros(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };



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

            <div className="card-financeiro">
                {financeiros.map((financeiro) => (
                    <div className="container-card-financeiro">
                        <div className="card-left">
                            <h1 className="nome-card-financeiro">{financeiro.nomeCliente}</h1>
                            <h2 className="barbeiro-card">{financeiro.nomeBarbeiro}</h2>
                        </div>

                        <div className="card-mid">
                            <h2 className="hora-card-financeiro">{formatDateTime(financeiro.horarioMarcado)}</h2>
                        </div>

                        <div className="card-right">
                            <h2 className="total-card-financeiro">TOTAL:</h2>
                            <h2 className="valor-card-financeiro">R${financeiro.valorTotal},00</h2>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Financeiro
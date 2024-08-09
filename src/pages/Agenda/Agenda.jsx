import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Agenda.css"
import Header from "../../components/Header/Header";

function Agenda() {
    const navigate = useNavigate();

    const [financeiros, setFinanceiros] = useState([]);
    const [agendamento, setAgendamento] = useState([]);
    const [selectedAgendamento, setSelectedAgendamento] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/financeiros')
            .then(response => {
                setFinanceiros(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });

            axios.get('http://localhost:5000/api/agendamento')
            .then(response => {
                setAgendamento(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const formatDateTime = (dateTime) => {
        console.log(dateTime)
        return dateTime;
    };



    return (
        <main className="main-financeiro">
            <div className="header">
                <Header />
            </div>

            <div className="container-financeiro">
                <h1 className="title-financeiro">Todos os Clientes</h1>
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
                            <h2 className="valor-card-finalizado">FINALIZADO</h2>
                        </div>
                    </div>
                ))}
                
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
                            <h2 className="valor-card-finalizado">FINALIZADO</h2>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Agenda
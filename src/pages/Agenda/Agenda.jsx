import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Agenda.css";
import Header from "../../components/Header/Header";

function Agenda() {
    const [financeiros, setFinanceiros] = useState([]);
    const [agendamentos, setAgendamentos] = useState([]);
    const [date, setDate] = useState('');
    const [formattedDate, setFormattedDate] = useState('');


    useEffect(() => {
        //se date for vazio
        if (date === '') {
            axios.get('http://localhost:5000/api/financeiros')
                .then(response => {
                    setFinanceiros(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the data!", error);
                });

            axios.get('http://localhost:5000/api/agendamentos')
                .then(response => {
                    setAgendamentos(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the data!", error);
                });
        // se não, ele faz a chamada
        } else {
            fetchDataByDateForFinanceiros(formattedDate);
            fetchDataByDateForAgendamento(formattedDate);
        }
    }, [date, formattedDate]); 


//faz a chamada do financeiro para o backend
    function fetchDataByDateForFinanceiros(date) {
        axios.get('http://localhost:5000/api/get-date-financeiro', { params: { date } })
            .then(response => {
                setFinanceiros(response.data)
            })
            .catch(error => {
                console.log('error', error);
            });
    }

//faz a chamada do agendamento para o backend
function fetchDataByDateForAgendamento(date) {
        axios.get('http://localhost:5000/api/get-date-agendamento', { params: { date } })
            .then(response => {
                setAgendamentos(response.data)
            })
            .catch(error => {
                console.log('error', error);
            });
    }

//captura a mudança de data
    const changeData = (event) => {
        const novaData = event.target.value;
        setDate(novaData);
        setFormattedDate(formatDate(novaData));
    };


//formata a data para o formato do banco
    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    };


    
    return (
        <main className="main-financeiro">
            <div className="header">
                <Header />
            </div>

            <div className="container-financeiro">
                <h1 className="title-financeiro">Todos os Clientes</h1>
                <div className="ctn-filtro ctn-financeiro">
                    <input type="date" className="date" name="date" value={date} onChange={changeData} />
                    <div className="filtro-pc">MAIS RECENTE</div>
                </div>
            </div>

            <div className="card-financeiro">
                {agendamentos.map((agendamento) => (
                    <div className="container-card-financeiro" key={agendamento.id}>
                        <div className="card-left">
                            <h1 className="nome-card-financeiro">{agendamento.nomeCliente}</h1>
                            <h2 className="barbeiro-card">{agendamento.nomeBarbeiro}</h2>
                        </div>

                        <div className="card-mid">
                            <h2 className="hora-card-financeiro">{agendamento.horarioMarcado}</h2>
                        </div>

                        <div className="card-right">
                            <h2 className="valor-card-procedimento">EM PROCESSO</h2>
                        </div>
                    </div>
                ))}

                {financeiros.map((financeiro) => (
                    <div className="container-card-financeiro" key={financeiro.id}>
                        <div className="card-left">
                            <h1 className="nome-card-financeiro">{financeiro.nomeCliente}</h1>
                            <h2 className="barbeiro-card">{financeiro.nomeBarbeiro}</h2>
                        </div>

                        <div className="card-mid">
                            <h2 className="hora-card-financeiro">{financeiro.horarioMarcado}</h2>
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

export default Agenda;

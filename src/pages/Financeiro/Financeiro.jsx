import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Financeiro.css"
import Header from "../../components/Header/Header";

function Financeiro() {

    const [financeiros, setFinanceiros] = useState([]);
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
            // se não, ele faz a chamada
            } else {
                fetchDataByDateForFinanceiros(formattedDate);
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
                <h1 className="title-financeiro">FINANCEIRO</h1>
                <div className="ctn-filtro ctn-financeiro">
                    <input type="date" className="date" name="date" value={date} onChange={changeData} />
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
                            <h2 className="hora-card-financeiro">{financeiro.horarioMarcado}</h2>
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
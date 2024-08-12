import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//css
import "./CardPc.css";

//components
import Modal from "../Modal/Modal";

function CardPc() {
    const [agendamentos, setAgendamentos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAgendamento, setSelectedAgendamento] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/agendamentos')
            .then(response => {
                setAgendamentos(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const openModal = (agendamento) => {
        setSelectedAgendamento(agendamento);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        navigate('/');
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
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
        <div>
            {agendamentos.map((agendamento) => (
                <main className="main-card" key={agendamento.id}>
                    <div className="card-left">
                        <h1 className="nome-card">{agendamento.nomeCliente}</h1>
                        <h2 className="barbeiro-card">{agendamento.nomeBarbeiro}</h2>
                    </div>

                    <div className="card-right">
                        <h2 className="hora-card">{formatDateTime(agendamento.horarioMarcado)}</h2>
                        <button className="btn-card" onClick={() => openModal(agendamento)}>FINALIZAR</button>
                    </div>
                </main>
            ))}

            {isModalOpen && selectedAgendamento && (
                <Modal 
                    agendamento_id ={selectedAgendamento.id}
                    nome={selectedAgendamento.nomeCliente}
                    barbeiro={selectedAgendamento.nomeBarbeiro}
                    hora={formatDateTime(selectedAgendamento.horarioMarcado)}
                    procedimentos={selectedAgendamento.procedimentos}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
}

export default CardPc;

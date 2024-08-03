import React, { useState, useEffect } from "react";
import axios from "axios";

//css
import "./CardPc.css";

//components
import Modal from "../Modal/Modal";

function CardPc() {
    const [agendamentos, setAgendamentos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAgendamento, setSelectedAgendamento] = useState(null);

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
        setIsModalOpen(false);
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

    return (
        <div>
            {agendamentos.map((agendamento) => (
                <main className="main-card" key={agendamento.id}>
                    <div className="card-left">
                        <h1 className="nome-card">{agendamento.nomeCliente}</h1>
                        <h2 className="barbeiro-card">{agendamento.nomeBarbeiro}</h2>
                    </div>

                    <div className="card-right">
                        <h2 className="hora-card">{agendamento.horarioMarcado}</h2>
                        <button className="btn-card" onClick={() => openModal(agendamento)}>FINALIZAR</button>
                    </div>
                </main>
            ))}

            {isModalOpen && selectedAgendamento && (
                <Modal 
                    nome={selectedAgendamento.nomeCliente}
                    barbeiro={selectedAgendamento.nomeBarbeiro}
                    hora={selectedAgendamento.horarioMarcado}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
}

export default CardPc;

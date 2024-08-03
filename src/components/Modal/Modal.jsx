import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Modal.css";

function Modal({ nome, barbeiro, hora, closeModal }) {
    const [procedimentos, setProcedimentos] = useState([]);

    useEffect(() => {
        fetchProcedimentos();
    }, []);

    const fetchProcedimentos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/procedimentos');
            setProcedimentos(response.data);
        } catch (error) {
            console.error("Erro ao buscar procedimentos:", error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1>PROCEDIMENTOS</h1>
                <p><strong>Cliente:</strong> {nome}</p>
                <p><strong>Barbeiro:</strong> {barbeiro}</p>
                <p><strong>Horário:</strong> {hora}</p>

                <div className="procedimentos">
                    <h2>Lista de Procedimentos:</h2>
                    <ul>
                        {procedimentos.map((procedimento, index) => (
                            <li key={index}>{procedimento.procedimento}</li>
                        ))}
                    </ul>
                </div>

                <button onClick={closeModal} className="btn_modal">FINALIZAR PROCEDIMENTO</button>
            </div>
        </div>
    );
}

export default Modal;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Modal.css";

function Modal({ nome, barbeiro, hora, closeModal }) {
    const [procedimentos, setProcedimentos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/procedimentos-get')
            .then(response => {
                setProcedimentos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar procedimentos:", error);
            });
    }, []);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="cnt-procedimento">
                    <div className="procedimento-h1">
                        <h1>PROCEDIMENTOS</h1>
                    </div>
                    <div className="right-infos">
                        <div>
                            <p><strong>Cliente:</strong> {nome}</p>
                            <p><strong>Barbeiro:</strong> {barbeiro}</p>
                        </div>
                        <div>
                            <p><strong>Horário:</strong> {hora}</p>
                        </div>
                    </div>
                    <button onClick={closeModal} className="x">
                        <h1 className="x-h1">X</h1>
                    </button>
                </div>

                <h2>Lista de Procedimentos</h2>
                
                <div className="procedimentos">
                    <div className="procedimentos-grid">
                        {procedimentos.map(procedimento => (
                            <div key={procedimento.id} className="procedimento-item">
                                <input
                                    type="checkbox"
                                />
                                <label>
                                    {procedimento.procedimento} <br /> R${procedimento.valor}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="btn-valorTotal">
                    <button className="btn_modal">FINALIZAR ATENDIMENTO</button>
                    <h2>Valor total: R$ { }</h2>
                </div>
            </div>
        </div>
    );
}

export default Modal;

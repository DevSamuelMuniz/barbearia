import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Modal.css";

function Modal({ nome, barbeiro, hora, closeModal }) {
    const [procedimentos, setProcedimentos] = useState([]);
    const [selectedProcedimentos, setSelectedProcedimentos] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/api/procedimentos-get')
            .then(response => {
                setProcedimentos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar procedimentos:", error);
            });
    }, []);

    const handleSelectProcedimento = (procedimento) => {
        const alreadySelected = selectedProcedimentos.find(p => p.id === procedimento.id);

        let updateSelected;
        if(alreadySelected) {
            updateSelected = selectedProcedimentos.filter(p => p.id !== procedimento.id);
        } else {
            updateSelected = [...selectedProcedimentos, procedimento];
        }

        setSelectedProcedimentos(updateSelected);

        const newTotal = updateSelected.reduce((acc, p) => acc + parseFloat(p.valor), 0);
        setTotal(newTotal);
    }

    const hadleSubmit = () =>{
        axios.post('http://localhost:5000/api/store-procedimentos', {
            nomeCliente: nome,
            nomeBarbeiro: barbeiro,
            horarioMarcado: hora,
            procedimentos: selectedProcedimentos,
            total
        })
        .then(() => {
            closeModal();
        })
        .catch(error => {
            console.log('Erro ao enviar dados', error);
        });
    }


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
                                    onChange={() => handleSelectProcedimento(procedimento)}
                                    checked={selectedProcedimentos.some(p => p.id === procedimento.id)}
                                />
                                <label>
                                    {procedimento.procedimento} <br /> R${procedimento.valor}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="btn-valorTotal">
                    <button className="btn_modal" onClick={hadleSubmit}>FINALIZAR ATENDIMENTO</button>
                    <h2>Valor total: R$ {total.toFixed(2)}</h2>
                </div>
            </div>
        </div>
    );
}

export default Modal;

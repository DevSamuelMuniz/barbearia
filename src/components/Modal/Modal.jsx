import React from "react";
import "./Modal.css"

function Modal({ nome, barbeiro, hora, closeModal }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1>PROCEDIMENTOS</h1>
                <p>{nome}</p>
                <p>{barbeiro}</p>
                <p>{hora}</p>
                <div className="procedimentos">
                    <div>
                        <input type="checkbox" id="corteBasico1" />
                        <label htmlFor="corteBasico1">CORTE BÁSICO</label>
                    </div>
                    <div>
                        <input type="checkbox" id="corteBasico2" />
                        <label htmlFor="corteBasico2">CORTE BÁSICO</label>
                    </div>
                </div>
                <button onClick={closeModal}>FINALIZAR PROCEDIMENTO</button>
            </div>
        </div>
    );
}

export default Modal;

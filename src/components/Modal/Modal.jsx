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
                    
                </div>
                <button onClick={closeModal} className="btn_modal">FINALIZAR PROCEDIMENTO</button>
            </div>
        </div>
    );
}

export default Modal;

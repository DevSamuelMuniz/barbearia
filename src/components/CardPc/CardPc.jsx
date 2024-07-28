import React, { useState, useEffect } from "react";

//css
import "./CardPc.css"

//components
import Modal from "../Modal/Modal";


function CardPc({ nome, barbeiro, hora }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
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
        <main className="main-card">
            <div className="card-left">
                <h1 className="nome-card">{nome}</h1>
                <h2 className="barbeiro-card">{barbeiro}</h2>
            </div>

            <div className="card-right">
                <h2 className="hora-card">{hora}</h2>
                <button className="btn-card" onClick={openModal}>FINALIZAR</button>
            </div>

            {isModalOpen && (
                <Modal 
                    nome={nome}
                    barbeiro={barbeiro}
                    hora={hora}
                    closeModal={closeModal}
                />
            )}
        </main>
    );
}

export default CardPc;

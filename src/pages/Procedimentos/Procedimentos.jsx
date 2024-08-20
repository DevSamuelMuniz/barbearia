import React, { useState } from "react";
import axios from "axios";
import "./Procedimentos.css";
import Header from "../../components/Header/Header";

function Procedimentos() {
    const [procedimento, setProcedimento] = useState("");
    const [valor, setValor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/procedimentos", {
                procedimento,
                valor
            });

            if (response.status === 201) {
                alert("Procedimento adicionado com sucesso!");
                setProcedimento(""); // Limpa o campo de entrada após o envio
                setValor("");
            } else {
                alert("Erro ao adicionar procedimento.");
            }
        } catch (error) {
            alert("Erro ao adicionar procedimento.");
            console.error(error);
        }
    };

    return (
        <main className="main-procedimentos">
            <div>
                <Header />
            </div>
            <div className="container-procedimentos">
                <div className="bg-procedimentos">
                    <h1 className="h1-procedimentos">PROCEDIMENTOS</h1>
                    <form className="form-procedimentos" onSubmit={handleSubmit}>
                        <div className="mb-3 add-procedimentos">
                            <label htmlFor="text" className="form-label">Procedimentos:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="procedimentos"
                                placeholder="Digite os procedimentos aqui"
                                value={procedimento}
                                onChange={(e) => setProcedimento(e.target.value)}
                            />
                        </div>

                        <div className="mb-3 add-procedimentos valor">
                            <label htmlFor="text" className="form-label">Valor:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="valor"
                                placeholder="Digite o valor aqui"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn-procedimentos">Adicionar</button>
                    </form>
                </div>
            </div>
        </main>


    );
}

export default Procedimentos;

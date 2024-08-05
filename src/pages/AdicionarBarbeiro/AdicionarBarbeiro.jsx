import React, { useState } from "react";
import axios from "axios";

//css
import "./AdicionarBarbeiro.css"
//components
import Header from "../../components/Header/Header";

function AdicionarBarbeiro() {
    const [nomeBarbeiro, setNomeBarbeiro] = useState("");
    const [cpf, setCpf] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/addBarbeiro', {
                nomeBarbeiro,
                cpf
            });
            alert(response.data.message || "Barbeiro adicionado com sucesso!");
            setNomeBarbeiro("");
            setCpf("");
        } catch (error) {
            console.log('Erro ao adicionar barbeiro:', error);
            alert("Erro ao adicionar barbeiro. Tente novamente.");
        }
    };

    return (
        <main className="main-AddBarber">
            <Header />
            <div className="containerAddBarbe">
                <div className="bg-addBarbe">
                    <h1 className="h1-addBarbe">ADICIONAR BARBEIRO</h1>
                    <form className="formAddBarbe" onSubmit={handleSubmit}>
                        <div className="mb-3 addBarbeInput">
                            <label htmlFor="name" className="form-label">Nome do barbeiro:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name"  
                                placeholder="Digite o nome aqui" 
                                value={nomeBarbeiro}
                                onChange={(e) => setNomeBarbeiro(e.target.value)}
                            />
                        </div>

                        <div className="mb-3 addBarbeInput last">
                            <label htmlFor="CPF" className="form-label">CPF:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="CPF" 
                                placeholder="Digite o CPF aqui" 
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btnAddBarbe">Adicionar</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default AdicionarBarbeiro;

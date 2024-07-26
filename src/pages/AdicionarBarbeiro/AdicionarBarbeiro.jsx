import React from "react";
//css
import "./AdicionarBarbeiro.css"
//components
import Header from "../../components/Header/Header";

function AdicionarBarbeiro() {

    return (
        <main className="main-AddBarber">
            <Header />
            <div className="containerAddBarbe">
                <div className="bg-addBarbe">
                    <h1 className="h1-addBarbe">Adicionar Barbeiro</h1>
                    <form className="formAddBarbe">
                        <div className="mb-3 addBarbeInput">
                            <label htmlFor="name" className="form-label">Nome do barbeiro</label>
                            <input type="text" className="form-control" id="name"  placeholder="Digite o nome aqui" />
                        </div>

                        <div className="mb-3 addBarbeInput last">
                            <label htmlFor="CPF" className="form-label">CPF</label>
                            <input type="text" className="form-control" id="CPF" placeholder="Digite o CPF aqui" />
                        </div>
                        <button type="submit" className="btnAddBarbe">Entrar</button>

                    </form>
                </div>
            </div>
        </main>
    );
}

export default AdicionarBarbeiro;

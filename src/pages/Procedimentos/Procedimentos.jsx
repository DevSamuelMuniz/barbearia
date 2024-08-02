import React from "react";
import "./Procedimentos.css";
import Header from "../../components/Header/Header";


function Procedimentos() {
  
    return (
        

        <main className="main-procedimentos">
            <div>
                <Header />
            </div>
            
            
            <div className="ctn-procedimentos">
                <div className="bg-procedimentos">
                    <h1 className="h1-procedimentos">PROCEDIMENTOS</h1>
                    <form className="form-procedimentos">
                        <div className="mb-3 procedimentos-input">
                            <label htmlFor="text" className="form-label">Procedimentos:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="procedimentos"
                                placeholder="Digite os procedimentos aqui"
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

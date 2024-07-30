import React from "react";

//css
import "./Agendamento.css"

//components


function Agendamento() {

    return (
        <main className="main-agendamento">
            <div>
                <h1 className="title-pc">AGENDAMENTO</h1>
            </div>

            <div className="card-ctn">
                <form className="form-agendamento" action="">
                    <div className="div-form">
                        <label className="label-agendamento" htmlFor="">Nome do cliente:</label>
                        <br />
                        <input className="input-agendamento" type="text" name="" id="" />
                    </div>

                    <div className="div-form">
                        <label className="label-agendamento" htmlFor="">Nome do barbeiro:</label>
                        <br />
                        <input className="input-agendamento" type="text" name="" id="" />
                    </div>

                    <div className="div-form">
                        <label className="label-agendamento" htmlFor="">Horário marcado:</label>
                        <br />
                        <input className="input-agendamento" type="datetime-local" name="" id="" />
                    </div>

                    <button className="btn-agendamento">AGENDAR</button>

                </form>
            </div>
        </main>
    )
}

export default Agendamento;

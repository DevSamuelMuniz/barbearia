import React from "react";

//css
import "./Agendamento.css"

//components


function Agendamento() {

    return (
        <main className="main-pc">
            <div>
                <h1 className="title-pc">AGENDAMENTO</h1>
            </div>

            <div className="card-ctn">
                <form action="">
                    <div>
                        <label htmlFor="">Nome do cliente:</label>
                        <br />
                        <input type="text" name="" id="" />
                    </div>

                    <div>
                        <label htmlFor="">Nome do barbeiro:</label>
                        <br />
                        <input type="text" name="" id="" />
                    </div>

                    <div>
                        <label htmlFor="">Horário marcado:</label>
                        <br />
                        <input type="datetime-local" name="" id="" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Agendamento;

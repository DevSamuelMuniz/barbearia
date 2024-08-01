import { useState } from "react";
import "./Agendamento.css";

function Agendamento() {
    const [formData, setFormData] = useState({
        inputCliente: '',
        inputBarbeiro: '',
        inputHorario: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <main className="main-agendamento">
            <div>
                <h1 className="title-pc">AGENDAMENTO</h1>
            </div>

            <div className="card-ctn">
                <form className="form-agendamento" onSubmit={handleSubmit}>
                    <div className="div-form">
                        <label className="label-agendamento" htmlFor="inputCliente">Nome do cliente:</label>
                        <br />
                        <input
                            className="input-agendamento"
                            type="text"
                            name="inputCliente"
                            id="inputCliente"
                            value={formData.inputCliente}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="div-form">
                        <label className="label-agendamento" htmlFor="inputBarbeiro">Nome do barbeiro:</label>
                        <br />
                        <select
                            className="input-agendamento"
                            name="inputBarbeiro"
                            id="inputBarbeiro"
                            value={formData.inputBarbeiro}
                            onChange={handleChange}
                        >
                            <option value="">Selecione um barbeiro</option>
                            <option value="barbeiro1">Barbeiro 1</option>
                            <option value="barbeiro2">Barbeiro 2</option>
                            <option value="barbeiro3">Barbeiro 3</option>
                        </select>
                    </div>

                    <div className="div-form">
                        <label className="label-agendamento" htmlFor="inputHorario">Horário marcado:</label>
                        <br />
                        <input
                            className="input-agendamento"
                            type="datetime-local"
                            name="inputHorario"
                            id="inputHorario"
                            value={formData.inputHorario}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="btn-agendamento">AGENDAR</button>
                </form>
            </div>
        </main>
    );
}

export default Agendamento;

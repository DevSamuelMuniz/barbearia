import { useState, useEffect } from "react";
import "./Agendamento.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Agendamento() {
    const navigate = useNavigate();
    const [nomeCliente, setNomeCliente] = useState("");
    const [nomeBarbeiro, setNomeBarbeiro] = useState("");
    const [horarioMarcado, setHorarioMarcado] = useState("");
    const [barbeiros, setBarbeiros] = useState([]);

    // Fetch barbeiros when the component mounts
    useEffect(() => {
        const fetchBarbeiros = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/barbeiros');
                setBarbeiros(response.data);
            } catch (error) {
                console.log('Erro ao buscar barbeiros:', error);
            }
        };

        fetchBarbeiros();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/agendamento', {
                nomeCliente,
                nomeBarbeiro,
                horarioMarcado
            });
            alert(response.data.message);
            navigate('/'); // Redireciona após o registro bem-sucedido
        } catch (error) {
            console.log('Erro ao adicionar agendamento:', error)
        }
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
                            value={nomeCliente}
                            onChange={(e) => setNomeCliente(e.target.value)}
                        />
                    </div>

                    <div className="div-form">
                        <label className="label-agendamento" htmlFor="inputBarbeiro">Nome do barbeiro:</label>
                        <br />
                        <select
                            className="input-agendamento"
                            name="inputBarbeiro"
                            id="inputBarbeiro"
                            value={nomeBarbeiro}
                            onChange={(e) => setNomeBarbeiro(e.target.value)}
                        >
                            <option value="">Selecione um barbeiro</option>
                            {barbeiros.map(barbeiro => (
                                <option key={barbeiro.id} value={barbeiro.nomeBarbeiro}>
                                    {barbeiro.nomeBarbeiro}
                                </option>
                            ))}
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
                            value={horarioMarcado}
                            onChange={(e) => setHorarioMarcado(e.target.value)}
                        />
                    </div>

                    <button className="btn-agendamento" type="submit">AGENDAR</button>
                </form>
            </div>
        </main>
    );
}

export default Agendamento;

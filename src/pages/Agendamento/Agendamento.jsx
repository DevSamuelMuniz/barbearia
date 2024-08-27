import { useState, useEffect } from "react";
import "./Agendamento.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AgendamentoCliente() {
    const navigate = useNavigate();
    const [nomeCliente, setNomeCliente] = useState("");
    const [nomeBarbeiro, setNomeBarbeiro] = useState("");
    const [horarioMarcado, setHorarioMarcado] = useState("");
    const [barbeiros, setBarbeiros] = useState([]);
    const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

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

    useEffect(() => {
        const fetchHorariosDisponiveis = async () => {
            if (selectedDate) {
                try {
                    const response = await axios.get(`http://localhost:5000/api/horarios?date=${selectedDate}`);
                    setHorariosDisponiveis(response.data);
                } catch (error) {
                    console.log('Erro ao buscar horários disponíveis:', error);
                }
            }
        };

        fetchHorariosDisponiveis();
    }, [selectedDate]);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!horarioMarcado) {
            alert('Por favor, selecione um horário disponível.');
            return;
        }

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
                        <label className="label-agendamento" htmlFor="inputDate">Data:</label>
                        <br />
                        <input
                            className="input-agendamento"
                            type="date"
                            name="inputDate"
                            id="inputDate"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>

                    <div className="div-form">
                        <label className="label-agendamento" htmlFor="inputHorario">Horário marcado:</label>
                        <br />
                        <select
                            className="input-agendamento"
                            name="inputHorario"
                            id="inputHorario"
                            value={horarioMarcado}
                            onChange={(e) => setHorarioMarcado(e.target.value)}
                        >
                            <option value="">Selecione um horário</option>
                            {horariosDisponiveis.map(horario => (
                                <option key={horario} value={horario}>
                                    {horario}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button className="btn-agendamento" type="submit">AGENDAR</button>
                </form>
            </div>
        </main>
    );
}

export default AgendamentoCliente;

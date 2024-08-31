import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './horariosBarbeiro.css'; // Importe o CSS aqui

function HorariosBarbeiro() {
    const [nomeBarbeiro, setNomeBarbeiro] = useState('');
    const [horarioInicial, setHorarioInicial] = useState('');
    const [horarioFinal, setHorarioFinal] = useState('');
    const [duracaoCorte, setDuracaoCorte] = useState(30); // duração em minutos
    const [disponivel, setDisponivel] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [barbeiros, setBarbeiros] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Calcula os horários disponíveis
            const horariosDisponiveis = [];
            const intervalo = duracaoCorte + 10; // duração do corte + 10 minutos
            const inicio = new Date(horarioInicial);
            const fim = new Date(horarioFinal);

            while (inicio < fim) {
                horariosDisponiveis.push(inicio.toISOString());
                inicio.setMinutes(inicio.getMinutes() + intervalo);
            }

            const response = await axios.post('http://localhost:5000/api/horarios-disponiveis', {
                nomeBarbeiro,
                horariosDisponiveis,
                disponivel
            });

            setSuccess(response.data.message);
            setError('');
        } catch (error) {
            setError(error.response?.data?.error || 'Erro desconhecido');
        }
    };

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

    return (
        <div className="form-container">
            <h2>Adicionar Horário do Barbeiro</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Barbeiro:
                    <div className="mb-3 registerInput-agendamentoCliente">
                        <label className="form-label" htmlFor="inputBarbeiro">Nome do barbeiro:</label>
                        <br />
                        <select
                            className="form-control-agendamentoCliente"
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
                </label>
                <label>
                    Horário Inicial:
                    <input
                        type="datetime-local"
                        value={horarioInicial}
                        onChange={(e) => setHorarioInicial(e.target.value)}
                    />
                </label>
                <label>
                    Horário Final:
                    <input
                        type="datetime-local"
                        value={horarioFinal}
                        onChange={(e) => setHorarioFinal(e.target.value)}
                    />
                </label>
                <label>
                    Duração do Corte (minutos):
                    <input
                        type="number"
                        value={duracaoCorte}
                        onChange={(e) => setDuracaoCorte(Number(e.target.value))}
                    />
                </label>
                <label>
                    Disponível:
                    <input
                        type="checkbox"
                        checked={disponivel}
                        onChange={(e) => setDisponivel(e.target.checked)}
                    />
                </label>
                <button type="submit">Adicionar Horário</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>
        </div>
    );
}

export default HorariosBarbeiro;

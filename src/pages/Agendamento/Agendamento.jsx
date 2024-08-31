import React, { useEffect, useState } from "react";
import "./Agendamento.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from '../../assets/img/logo1.png';

function AgendamentoCliente() {
    const navigate = useNavigate();
    const [nomeBarbeiro, setNomeBarbeiro] = useState("");
    const [barbeiros, setBarbeiros] = useState([]);
    const [barbeiroEscolhido, setBarbeiroEscolhido] = useState("");
    const [horarios, setHorarios] = useState([]);
    const [nome, setNome] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [horario, setHorario] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

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

    useEffect(() => {
        const fetchHorarios = async () => {
            if (barbeiroEscolhido) {
                try {
                    const response = await axios.get(`http://localhost:5000/api/horarios-disponiveis?nomeBarbeiro=${barbeiroEscolhido}`);
                    setHorarios(response.data);
                } catch (error) {
                    console.log('Erro ao buscar horários:', error);
                }
            } else {
                setHorarios([]);
            }
        };

        fetchHorarios();
    }, [barbeiroEscolhido]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !whatsapp || !horario || !barbeiroEscolhido) {
            setError('Todos os campos são obrigatórios.');
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/agendar', {
                horarioId: horario,
                nomeCliente: nome,
                nomeBarbeiro: barbeiroEscolhido,
                whatsapp: whatsapp
            });
            setSuccess('Agendamento realizado com sucesso!');
            setError('');
        } catch (error) {
            setError('Erro ao realizar o agendamento.');
            console.log('Erro ao agendar:', error);
        }
        navigate('/AgendamentoCliente');
    };

    return (
        <main className="main-agendamentoCliente">
            <div className="col-right-agendamentoCliente">
                <div className="bg-register-agendamentoCliente">
                    <h1 className="h1-register-agendamentoCliente">AGENDAR BARBEIRO</h1>
                    <form className="formRegister-agendamentoCliente" onSubmit={handleSubmit}>
                        <div className="mb-3 registerInput-agendamentoCliente">
                            <label htmlFor="name" className="form-label">Nome Completo</label>
                            <input
                                type="text"
                                className="form-control-agendamentoCliente"
                                id="name"
                                placeholder="Digite seu nome completo"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="mb-3 registerInput-agendamentoCliente">
                            <label className="form-label" htmlFor="inputBarbeiro">Nome do barbeiro:</label>
                            <select
                                className="form-control-agendamentoCliente"
                                name="inputBarbeiro"
                                id="inputBarbeiro"
                                value={barbeiroEscolhido}
                                onChange={(e) => setBarbeiroEscolhido(e.target.value)}
                            >
                                <option value="">Selecione um barbeiro</option>
                                {barbeiros.map(barbeiro => (
                                    <option key={barbeiro.id} value={barbeiro.nomeBarbeiro}>
                                        {barbeiro.nomeBarbeiro}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3 registerInput-agendamentoCliente">
                            <label htmlFor="horario" className="form-label">Horário</label>
                            <select
                                className="form-control-agendamentoCliente"
                                id="horario"
                                value={horario}
                                onChange={(e) => setHorario(e.target.value)}
                            >
                                <option value="">Escolha um horário</option>
                                {horarios.map(horarioItem => (
                                    horarioItem.disponivel ? (
                                        <option key={horarioItem.id} value={horarioItem.id}>
                                            {new Date(horarioItem.horario).toLocaleString()}
                                        </option>
                                    ) : null
                                ))}
                            </select>
                        </div>

                        <div className="mb-3 registerInput-agendamentoCliente">
                            <label htmlFor="whatsapp" className="form-label">Whatsapp</label>
                            <input
                                type="text"
                                className="form-control-agendamentoCliente"
                                id="whatsapp"
                                placeholder="Digite seu whatsapp"
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                                maxLength={11}
                            />
                            <p className="apenasNum">Apenas o número!</p>
                        </div>

                        {error && <p className="error-message">{error}</p>}
                        {success && <p className="success-message">{success}</p>}

                        <button type="submit" className="btnRegistro-agendamentoCliente">Agendar agora</button>
                    </form>
                    <a href="/" className="link-registro-agendamentoCliente">Faça o seu login aqui!</a>
                </div>
            </div>

            <div className="col-left-agendamentoCliente">
                <img src={Logo} alt="Logo" />
            </div>
        </main>
    );
}

export default AgendamentoCliente;

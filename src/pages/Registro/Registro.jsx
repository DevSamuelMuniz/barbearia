import React, { useState } from "react";
import "./Registro.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from '../../assets/img/logo1.png';

// Função para validar o formato do e-mail
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

function Registro() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState(''); // Adiciona estado para mensagens de erro

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validação dos campos
        if (!nome || !email || !senha || !confirmarSenha) {
            setError('Todos os campos são obrigatórios.');
            return;
        }

        if (senha !== confirmarSenha) {
            setError('As senhas não coincidem.');
            return;
        }

        if (!isValidEmail(email)) {
            setError('E-mail inválido.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                nome,
                email,
                senha
            });

            alert(response.data.message);
            navigate('/'); // Redireciona após o registro bem-sucedido
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError(error.response.data.message); // Define a mensagem de erro
            } else {
                console.error('Erro ao registrar usuário:', error);
                setError('Ocorreu um erro durante o registro.');
            }
        }
    }

    return (
        <main className="main-register">
            <div className="col-right">
                <div className="bg-register">
                    <h1 className="h1-register">REGISTRO</h1>
                    <form className="formRegister" onSubmit={handleSubmit}>
                        <div className="mb-3 registerInput">
                            <label htmlFor="name" className="form-label">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Digite seu nome aqui"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="mb-3 registerInput">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Digite seu email aqui"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3 registerInput">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Digite sua senha aqui"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        <div className="mb-3 registerInput">
                            <label htmlFor="confirmPassword" className="form-label">Confirme a Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Digite sua senha novamente"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                            />
                        </div>

                        {error && <p className="error-message">{error}</p>} {/* Exibe a mensagem de erro */}

                        <button type="submit" className="btnRegistro">Registrar</button>
                    </form>
                    <a href="/" className="link-registro">Faça o seu login aqui!</a>
                </div>
            </div>

            <div className="col-left">
                <img src={Logo} alt="Logo" />
            </div>
        </main>
    );
}

export default Registro;

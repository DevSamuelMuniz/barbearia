import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from '../../assets/img/logo1.png';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !senha) {
            setError('Email e senha são obrigatórios.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email,
                senha
            });

            const token = response.data.token;
            if (rememberMe) {
                localStorage.setItem('token', token);
            } else {
                sessionStorage.setItem('token', token);
            }
            navigate('/home');
        } catch (error) {
            setError('Credenciais inválidas.');
        }
    };

    return (
        <main className="main-login">
            <div className="col-left">
                <img src={Logo} alt="Logo" />
            </div>

            <div className="col-right">
                <div className="bg-login">
                    <h1 className="h1-login">LOGIN</h1>
                    <form className="formLogin" onSubmit={handleSubmit}>
                        <div className="mb-3 loginInput">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite seu email aqui"
                            />
                        </div>

                        <div className="mb-3 loginInput">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Digite sua senha aqui"
                            />
                        </div>

                        {/* Condicional para exibir a mensagem de erro */}
                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}
                        
                        <button type="submit" className="btnLogin">Entrar</button>
                    </form>
                    <a href="/registro" className="link-registro">Faça seu cadastro aqui!</a>
                    <a href="/AgendamentoCliente" className="link-registro">Faça seu agendamento</a>
                </div>
            </div>
        </main>
    );
}

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
// Imagem
import Logo from '../../assets/img/logo1.png';

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Limpar token de autenticação
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        
        // Redirecionar para a página de login
        navigate('/');
    };

    return (
        <main className="main-header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <div className="container-fluid">
                        <a href="/home"><img src={Logo} alt="Logo" className="logoNav" /></a>
                        <div className="navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" id="link" aria-current="page" href="/home">INICIO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="link" href="/agenda">AGENDA</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="link" href="/financeiro">FINANCEIRO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="link" href="/barbeiros">BARBEIROS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="link" href="/procedimentos">PROCEDIMENTOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <div className="exitNav">
                    <button onClick={handleLogout} className="sairNav">Sair</button>
                </div>
            </nav>
        </main>
    );
}

export default Header;

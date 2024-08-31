import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from '../../assets/img/logo1.png';
import BurgerMenu from '../BurguerMenu/BurguerMenu';

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        navigate('/');
    };

    return (
        <main className="main-header">
            <nav className="container-nav">
                <div className="container-fluid">
                    <a href="/home"><img src={Logo} alt="Logo" className="logoNav" /></a>
                    <div className="container-ul">
                        <ul className="ul-nav">
                            <li className="li-nav"><a className="a-nav" href="/home">INICIO</a></li>
                            <li className="li-nav"><a className="a-nav" href="/agenda">AGENDA</a></li>
                            <li className="li-nav"><a className="a-nav" href="/financeiro">FINANCEIRO</a></li>
                            <li className="li-nav"><a className="a-nav" href="/barbeiros">BARBEIROS</a></li>
                            <li className="li-nav"><a className="a-nav" href="/procedimentos">PROCEDIMENTOS</a></li>
                            <li className="li-nav"><a className="a-nav" href="/horariosBarbeiro">HORÁRIOS</a></li>
                        </ul>
                    </div>
                </div>
                <div className="exitNav">
                    <button onClick={handleLogout} className="sairNav">SAIR</button>
                </div>
                <BurgerMenu />
            </nav>
        </main>
    );
}

export default Header;
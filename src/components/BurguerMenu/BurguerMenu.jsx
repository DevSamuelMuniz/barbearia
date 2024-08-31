import React, { useState } from 'react';
import './BurguerMenu.css';
import { useNavigate } from 'react-router-dom';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        navigate('/');
    };

    return (
     <div className="main-burger">
           <div className="burger-menu">
            <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="burger-bar"></span>
                <span className="burger-bar"></span>
                <span className="burger-bar"></span>
            </button>
            <div className={`menu-content ${isOpen ? 'show' : ''}`}>
                <ul className="ul-nav">
                    <li className="li-nav-burger"><a className="a-nav-burger" href="/home">INICIO</a></li>
                    <li className="li-nav-burger"><a className="a-nav-burger" href="/agenda">AGENDA</a></li>
                    <li className="li-nav-burger"><a className="a-nav-burger" href="/financeiro">FINANCEIRO</a></li>
                    <li className="li-nav-burger"><a className="a-nav-burger" href="/barbeiros">BARBEIROS</a></li>
                    <li className="li-nav-burger"><a className="a-nav-burger" href="/procedimentos">PROCEDIMENTOS</a></li>
                    <li className="li-nav"><a className="a-nav" href="/horariosBarbeiro">HORÁRIOS</a></li>
                </ul>
                <button onClick={handleLogout} className="sairNav">SAIR</button>
            </div>
        </div>
     </div>
    );
}

export default BurgerMenu;

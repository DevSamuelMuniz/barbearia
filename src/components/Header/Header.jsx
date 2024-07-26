import React from "react";
import "./Header.css"
// Imagem
import Logo from '../../assets/img/logo1.png';

function Header() {
    return (
        <main>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <div class="container-fluid">
                        <img src={Logo} alt="Logo" className="logoNav" />
                        <div class=" navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/home">INICIO</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="/login" >AGENDA</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="/login" >FINANCEIRO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="exitNav">
                    <a href="/" className="sairNav">Sair</a> 
                </div>
            </nav>
        </main>
    )
}

export default Header;
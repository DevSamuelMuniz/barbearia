import React from "react";

// Imagem
import Logo from '../../assets/img/logo1.png';

function Header() {
    return (
        <main>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div className="LogoNav">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page">INICIO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" >AGENDA</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active">FINANCEIRO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-disabled="true">SAIR</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </main>
    )
}

export default Header;
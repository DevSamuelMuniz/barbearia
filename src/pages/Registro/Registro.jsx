import React from "react";
import "./Registro.css";
import { useNavigate } from "react-router-dom";

// Imagem
import Logo from '../../assets/img/logo1.png';



function Registro() {

    const navigate = useNavigate();

    const Login = () => {
        navigate('/')
    }

    return (
        <main className="main-login">

            <div className="col-right">
                <div className="bg-login">
                    <h1 className="h1-login">REGISTRO</h1>
                    <form className="formLogin">
                        <div className="mb-3 loginInput">
                            <label htmlFor="email" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="name" placeholder="Digite seu nome aqui"/>
                        </div>

                        <div className="mb-3 loginInput">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite seu email aqui"/>
                        </div>

                        <div className="mb-3 loginInput">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="password"  placeholder="Digite sua senha aqui"/>
                        </div>

                        <div className="mb-3 loginInput">
                            <label htmlFor="password" className="form-label">Confirme a Senha</label>
                            <input type="password" className="form-control" id="password"  placeholder="Digite sua senha aqui"/>
                        </div>
                        <button type="submit" className="btnRegistro" onClick={Login}>Registrar</button>
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
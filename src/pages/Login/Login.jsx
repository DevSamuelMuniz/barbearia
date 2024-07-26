import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

// Imagem
import Logo from '../../assets/img/logo1.png';

function Login() {
    const navigate = useNavigate();

    const Login = () => {
        navigate('/home')
    }

    return (
        <main className="main-login">

            <div className="col-left">
                <img src={Logo} alt="Logo" />
            </div>

            <div className="col-right">
                <div className="bg-login">
                    <h1 className="h1-login">LOGIN</h1>
                    <form className="formLogin">
                        <div className="mb-3 loginInput">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite seu email aqui"/>
                        </div>

                        <div className="mb-3 loginInput">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="password"  placeholder="Digite sua senha aqui"/>
                        </div>
                        <button type="submit" onClick={Login} className="btnLogin">Entrar</button>
                        
                    </form>
                    <a href="registro" className="link-registro">Faça seu cadastro aqui!</a>
                </div>
            </div>
        </main>
    );
}

export default Login;

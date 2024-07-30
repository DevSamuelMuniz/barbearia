import React from "react";
//css
import "./Home.css";
//components
import Header from "../../components/Header/Header";
import ProximosClientes from "../../components/proximosClientes/proximosClientes";
import Agendamento from "../../components/Agendamento/Agendamento";

function Home() {
    return (
        <main className="main-home">
            <Header />
            <div className="ctn-home">
                <ProximosClientes />
                <Agendamento />
            </div>
        </main>
    );
}

export default Home;

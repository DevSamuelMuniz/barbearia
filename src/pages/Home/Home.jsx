import React from "react";
//css
import "./Home.css"
//components
import Header from "../../components/Header/Header";
import ProximosClientes from "../../components/proximosClientes/proximosClientes";

function Home() {


    return (
        <main className="main-home">
                <Header />

            <div className="ctn-home">
                <ProximosClientes />
                <ProximosClientes />
            </div>
        </main>
    )
}


export default Home;
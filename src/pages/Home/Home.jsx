import React from "react";
//css
import "./Home.css"
//components
import Header from "../../components/Header/Header";
import ProximosClientes from "../../components/proximosClientes/proximosClientes";

function Home() {
  

    return (
        <main>
            <Header />
            <ProximosClientes />

            
        </main>
    )
}


export default Home;
import React from "react";

//css
import "./proximosClientes.css"

//components
import CardPc from "../CardPc/CardPc";

const date = '10/11/2024    '
const filtro = 'Mais recentes'

function ProximosClientes() {
    const dados = {
        nome: 'SAMUEL MUNIZ DA SILVA',
        barbeiro: 'BARB. MATHEUS',
        hora: '10:40',
    };

    return (
        <main className="main-pc">
            <div >
                <h1>PRÓXIMOS CLIENTES</h1>

                <div>{date}</div>
                <div>{filtro}</div>
            </div>

            <div>
                <CardPc
                    nome={dados.nome}
                    barbeiro={dados.barbeiro}
                    hora={dados.hora}
                />

                <CardPc
                    nome={dados.nome}
                    barbeiro={dados.barbeiro}
                    hora={dados.hora}
                />

                <CardPc
                    nome={dados.nome}
                    barbeiro={dados.barbeiro}
                    hora={dados.hora}
                />
                <CardPc
                    nome={dados.nome}
                    barbeiro={dados.barbeiro}
                    hora={dados.hora}
                />
            </div>
        </main>
    )
}


export default ProximosClientes;
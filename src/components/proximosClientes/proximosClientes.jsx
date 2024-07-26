import React from "react";

const date = '10/11/2024    '
const filtro = 'Mais recentes'

function ProximosClientes() {

    return (
        <main>
            <div>
                <h1>PRÓXIMOS CLIENTES</h1>

                <div>{date}</div>
                <div>{filtro}</div>
            </div>
        </main>
    )
}


export default ProximosClientes;
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import Home from "./pages/Home/Home";
import AdicionarBarbeiro from "./pages/AdicionarBarbeiro/AdicionarBarbeiro";
import Financeiro from "./pages/Financeiro/Financeiro";
import Procedimentos from "./pages/Procedimentos/Procedimentos";
import Agenda from "./pages/Agenda/Agenda";
import AgendamentoCliente from "./pages/Agendamento/Agendamento";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/AgendamentoCliente" element={<AgendamentoCliente />} />

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/barbeiros" element={<AdicionarBarbeiro />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/procedimentos" element={<Procedimentos />} />
          <Route path="/agenda" element={<Agenda />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;

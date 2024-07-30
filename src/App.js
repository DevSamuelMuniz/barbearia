import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro"
import Home from "./pages/Home/Home"
import AdicionarBarbeiro from "./pages/AdicionarBarbeiro/AdicionarBarbeiro";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/registro"Component={Registro} />
        <Route path="/home" Component={Home} />
        <Route path="/barbeiros" Component={AdicionarBarbeiro} />
      </Routes>
    </Router>
  );
}


export default App;
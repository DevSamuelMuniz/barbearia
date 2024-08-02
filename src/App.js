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

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/barbeiros" element={<AdicionarBarbeiro />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;

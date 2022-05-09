import './App.css';
import './assets/reset.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from './components/TelaLogin';
import TelaCadastro from './components/TelaCadastro';
import TelaGastos from './components/TelaGastos';
import EntradaSaida from './components/EntradaSaida';
import TokenProvider from './context/Token';
import UserProvider from './context/User';
function App() {
  return (
    <div className=" App">
      <UserProvider>
        <TokenProvider>     
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TelaLogin />}/>
              <Route path="/sign-up" element={<TelaCadastro />} />
              <Route path="/outlay" element={<TelaGastos />}/>
              <Route path="/entradasaida" element={<EntradaSaida />}/>
            </Routes>
          </BrowserRouter>
        </TokenProvider>
      </UserProvider>
    </div>
  );
}

export default App;

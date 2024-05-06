import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/contenedor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import IniciarSesion from './components/iniciosesion';
import EditarGasto from './components/EditarGasto';
import GastosPorCategoria from './components/gastosporcategoria';
import ListaGastos from './components/listagastos';
import RegistroUsuarios from './components/registrousuarios';


WebFont.load({
  google: {
    families: ['Work Sans: 400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <BrowserRouter>

      <Contenedor>

        <Routes>
          <Route path='/iniciar-sesion' element={<IniciarSesion />} />
          <Route path='/crear-cuenta' element={<RegistroUsuarios />} />
          <Route path='/categorias' element={<GastosPorCategoria />} />
          <Route path='/lista' element={<ListaGastos />} />
          <Route path='/editar/:id' element={<EditarGasto />} />
          <Route path='/' element={<App />} />
        </Routes>

      </Contenedor>

    </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Index />
);

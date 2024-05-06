import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/contenedor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


  WebFont.load({
    google: {
      families: ['Work Sans: 400,500,700', 'sans-serif']
    }
  });

const Index = () => {
  return (
    <BrowserRouter>
    <Contenedor><App />
    </Contenedor>
    </BrowserRouter>
  
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home/home';
import {Grid} from '@material-ui/core'
import Navbar from './componentes/estaticos/navbar/navbar';
import Footer from './componentes/estaticos/footer/footer';


function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Footer/>
    </>
  );
}

export default App;

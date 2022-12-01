import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/home';
import {Grid} from '@material-ui/core'
import Navbar from './componentes/estaticos/navbar/navbar';
import Footer from './componentes/estaticos/footer/footer';
import Login from './paginas/login/login';
import CadastroUsuario from './paginas/cadastro/CadastroUsuario'
import ListaTema from './componentes/temas/listatemas/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';




function App() {
  return (
    <>
      <Router>
        <Navbar/> 
        <Routes>
          <Route path='/home' element={<Home/>}> </Route>
              
          <Route path='/login' element={<Login/>}> </Route>  

          <Route path='/cadastrousuario' element={<CadastroUsuario/>}></Route>

          <Route path='/temas' element={<ListaTema/>}></Route>

          <Route path='/posts' element={<ListaPostagem/>}></Route>
         
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

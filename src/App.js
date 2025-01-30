import logo from './logo.svg';
import './App.css';
import Router from './Router';
import Header from './HeaderComp/Header';
import Footer from './FooterComp/Footer';
import { foodCoutrts } from './foodcourts';
import { useState } from 'react';

function App() {

  

  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;

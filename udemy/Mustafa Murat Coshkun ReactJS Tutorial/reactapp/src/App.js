import React from 'react';
import Navbar from "./components/Navbar"
import User from "./components/User"
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="container">
      <Navbar title="User App" />
      <hr />

      <User
        name="Murad Isgandarli"
        salary="5000"
        department="Programming"

      />

      <User
        name="Murad Isgandarli"
        salary="5000"
        department="Programming"

      />

    </div>
  );
}

export default App;

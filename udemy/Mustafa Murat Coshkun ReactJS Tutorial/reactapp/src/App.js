import React from 'react';
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import User from "./components/User"
import logo from './logo.svg';
import './App.css';

function App() {

  state = {

    users: [

      {
        id: 1,
        name="Murad Isgandarli",
        salary="5000",
        department="Programming"

      },

      {
        id: 2,
        name="Jhon Doe",
        salary="5000",
        department="Engineering"

      },

      {
        id: 3,
        name="Jhon Frank",
        salary="5000",
        department="Business"

      }
    ]
  }

  return (
    <div className="container">
      <Navbar title="User App" />
      <hr />

      {/* sending one component state props to another component in below code */}
      <Users users = {this.state.users}/>

    </div>
  );
}

export default App;

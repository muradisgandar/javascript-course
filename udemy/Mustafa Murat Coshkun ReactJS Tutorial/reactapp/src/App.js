import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import User from "./components/User"
import logo from './logo.svg';
import './App.css';

class App extends Component {

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

  deleteUser = (id) => {
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })
  }

  render(){
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
  
        {/* sending one component state props to another component in below code */}
        <Users deleteUser = {this.deleteUser} users = {this.state.users}/>
  
      </div>
    );
  }
  
}

export default App;

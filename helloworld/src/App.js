import React from 'react';
import './App.css';
import logo from './assets/images/BL-logo.jpg'

class App extends React.Component {

  constructor() {
    super() 
    this.state = {
      title: 'Hello from Bridgelabz'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt="BridgeLabz Logo goes here."/>
      </div>
    )
  }
} 

export default App;

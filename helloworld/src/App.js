import React from 'react';
import './App.css';

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
      </div>
    )
  }
} 

export default App;

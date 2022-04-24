import React from 'react';
import './App.css';
import logo from './assets/images/BL-logo.jpg'

class App extends React.Component {
  url="https://www.bridgelabz.com/"
  constructor() {
    super() 
    this.state = {
      //title: 'Hello from Bridgelabz',
      userName: ''
    }
  }

  /**
   * onClick method is called when image is clicked
   * here clicking is the event that we're checking
   */
  onClick = ($event) => {
    window.open(this.url,"_blank");
  }

  /**
   * onChange event listener is used to invoke this func
   * @param {*} event 
   */
  onNameChange = (event) => {
    this.setState({ userName: event.target.value})
  }

  render() {
    return (
      <>
        <div>
          <h1>Hello {this.state.userName} from BridgeLabz</h1>
          <img src={logo} onClick={this.onClick} 
            alt="BridgeLabz Logo goes here."/>
        </div>
        <div>
          <input onChange={this.onNameChange} />
        </div>
      </>
    )
  }
} 

export default App;

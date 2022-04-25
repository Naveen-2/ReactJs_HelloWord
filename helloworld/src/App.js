import React from 'react';
import './App.css';
import logo from './assets/images/BL-logo.jpg'
import Home from "./Home.js";
import About from "./About.js";
import { Switch, Link, Route } from "react-router-dom";

class App extends React.Component {
  url="https://www.bridgelabz.com/"
  constructor() {
    super() 
    this.state = {
      //title: 'Hello from Bridgelabz',
      userName: '',
      nameError: ''
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
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: event.target.value})
    if(nameRegex.test(event.target.value)) {
      this.setState({nameError: ''})
    } else {
      this.setState({nameError: 'Invalid name.'})
    }
  }

  render() {
    return (
      <div class="page-content">
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img src={logo} onClick={this.onClick} 
            alt="BridgeLabz Logo goes here"/>
        <div class="input-content">
          <input onChange={this.onNameChange} />
          <span className='error-output'>{this.state.nameError}</span>
        </div>
        <p>At BridgeLabz, we are a tech community of</p>
        <ul>
            <li>Technologists</li>
            <li>Thinkers</li>
            <li>Builders</li>
        </ul>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
            To know about us, visit <a href = {this.url}>BridgeLabz </a> 
            to learn even more about our misiion i.e. <strong>Employability to all</strong>.
        </p>  
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </div>
    )
  }
} 

export default App;

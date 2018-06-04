import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
      inputValue: '',
      echoValue: 'This should mirror the text you typed into the input field.'
    }
    updateValue = (inputValue) => {
    	this.setState(() => ({
          inputValue: inputValue.trim(),
          echoValue: inputValue
        }))
    }
  render() {
    const { inputValue, echoValue } = this.state
	
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
      		type="text" 
      		placeholder="Say Something" 
      	  	value={inputValue}
      		onChange={(event) => this.updateValue(event.target.value)}
      	  />
          <p className="echo">Echo:</p>
          <p>{echoValue}</p>
        </div>
      </div>
    );
  }
}

export default App;

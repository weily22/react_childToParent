import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './comps/Parent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent/>
      </div>
    );
  }
}

export default App;

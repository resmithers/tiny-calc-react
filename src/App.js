import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Calc from './components/Calc/Calc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Calc />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Selectron from './components/selectron/selectron';
import './App.css';

import StubData from './store/store.json';

class App extends Component {
  state = StubData;

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <h1>Hi there,</h1>
        <h2>I am Selectron-9000, the ultimate multi-select.</h2>

        <Selectron />
      </div>
    );
  }
}

export default App;

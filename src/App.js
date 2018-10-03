import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestActivity from './containers/testActivity';
import TestActivityA from './containers/testActivityA';
import TestActivityB from './containers/testActivityB';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
        <TestActivity />
        <TestActivityA />
        <TestActivityB />
        </div>
      </div>
    );
  }
}

export default App;

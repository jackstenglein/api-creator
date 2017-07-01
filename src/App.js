import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import AddObject from './components/AddObject/AddObject.js';
import AddRoute from './components/AddRoute/AddRoute.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="MainContainer">

          <AddRoute />
        </div>
      </div>
    );
  }
}

export default App;


/*

<div className="Container">
  <p>This is a test</p>
</div>
<div className="Container">
  <p>This is another test</p>
</div>
<Navigation test="test" />

*/

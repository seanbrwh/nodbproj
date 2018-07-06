import React, { Component } from 'react';
import Map from './component/map'
import IssInfo from './component/IssInfo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IssInfo/>
        <Map></Map>
      </div>
    );
  }
}

export default App;

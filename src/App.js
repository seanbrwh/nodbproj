import React, { Component } from 'react';
import IssInfo from './component/IssInfo'
import Comments from './component/Comments'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IssInfo/>
        <Comments/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import IssInfo from './component/IssInfo'
import Comments from './component/Comments'
import './App.css';
import Footer from './component/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <IssInfo/>
        <Comments/>
        <Footer/>
      </div>
    );
  }
}

export default App;

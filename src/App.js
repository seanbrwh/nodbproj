import React, { Component } from 'react';
import './App.css';
// import Iframe from 'react-iframe';
let {G_API_KEY} = process.env;


class App extends Component {
  render() {
    console.log(G_API_KEY);
    return (
      <div className="App">
          <iframe
            title='G'
            width="600"
            height="450"
            style={{border:0}}
            url={`https://www.google.com/maps/embed/v1/place?key=${G_API_KEY}&q=Space+Needle,Seattle+WA`}>
          </iframe>
          
      </div>
    );
  }
}

export default App;

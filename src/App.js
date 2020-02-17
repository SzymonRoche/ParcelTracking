import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  fetch("https://tracking.phse.com/griglie/esiti_servizio/grid_esiti_sped.php?idquery=1&IdSped=585171&_search=false&nd=1581944042826&rows=100&page=1&sidx=&sord=").then(res => res.json()).then(res => console.log(res))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

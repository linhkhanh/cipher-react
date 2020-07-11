import React from 'react';
import Encode from './Components/Encode';
import Decode from './Components/Decode';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CAESAR CIPHER</h1>
        <div className="row">
          <Encode />
          <Decode />
        </div>
      </header>

    </div>
  );
}

export default App;

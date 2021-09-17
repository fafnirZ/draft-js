import React from 'react';
import logo from './logo.svg';
import './App.css';
import FCeditor from './draft'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h3>Welcome to my draft-js Playground</h3>
        <FCeditor></FCeditor>
      </div>
    </div>
  );
}

export default App;

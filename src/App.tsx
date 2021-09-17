import React from 'react';
import logo from './logo.svg';
import './App.css';
import FCeditor from './draft'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FCeditor></FCeditor>
      </header>
    </div>
  );
}

export default App;

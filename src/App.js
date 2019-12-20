import React from 'react';
import {Landing} from "./components/Landing";
import {Navbar} from "./components/Navbar";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Landing />
      <Navbar />
    </div>
  );
}

export default App;

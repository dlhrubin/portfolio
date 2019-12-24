import React from 'react';
import {Navbar} from "./components/Navbar";
import {Landing} from "./components/Landing";
import {Projects} from "./components/Projects";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Projects />
    </div>
  );
}

export default App;

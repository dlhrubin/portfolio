import React from 'react';
import {Navbar} from "./components/Navbar";
import {Landing} from "./components/Landing";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

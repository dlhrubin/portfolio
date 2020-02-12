import React from 'react';
import {Navbar} from "./components/Navbar";
import {Landing} from "./components/Landing";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="top overlays">
          <svg className="white-overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fillOpacity="1" d="M0,224L80,240C160,256,320,288,480,272C640,256,800,192,960,149.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          <svg className="bright-overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fillOpacity="1" d="M0,320L48,282.7C96,245,192,171,288,117.3C384,64,480,32,576,53.3C672,75,768,149,864,165.3C960,181,1056,139,1152,106.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
      <main className="content">
        <Landing />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;

import React from 'react';
import HavenCalc from './HavenCalc';
import './normalize.css';
import './skeleton.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class='intro'>
        <h1>Haven Offall Calc1000</h1>
        <ul>
          <li>.125 (1/8th inch) is lost per cut from verticle blade</li>
          <li>2 - 3 inches is minimum offall. Less may destroy the last piece!</li>
          <li>ALL measurements are in inches.</li>
          <li>Arrow UP or DOWN and watch the magic happen!<li>not on mobile</li></li>
        </ul>
      </div>
        <HavenCalc />
    </div>
  );
}

export default App;

import React from 'react';
import HavenCalc from './HavenCalc';
import './App.css';
import './normalize.css';
import './skeleton.css';

function App() {
  return (
    <div className="App">
      <div class='intro'>
        <h1>Haven Offall Calc1000</h1>
        <p>Given Lengths below, what will the offall be? Under 2.5 is too small and will destroy the last piece.</p>
        <ul>
          <li>.125 (1/8th inch) is lost per cut from verticle blade</li>
          <li>2 - 3 inches is minimum offall. Less will crush the last part!</li>
          <li> 2-3 inches of offall vs. Loosing the last whole piece and 2-3 inches offall </li>
          <li>ALL measurements are in inches. God bless America!</li>
        </ul>
      </div>
        <HavenCalc />
    </div>
  );
}

export default App;

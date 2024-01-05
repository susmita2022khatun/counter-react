// App.js
import React, { useState } from 'react';
import RectangleChart from './RectangleChart';
import './RectangleChart.css'; // Import your CSS file for styling



const App = () => {
  const [accuracy, setAccuracy] = useState(0.5); // Initial values
  const [affectedRate, setAffectedRate] = useState(0.5); // Initial values

  const handleAccuracyChange = (event) => {
    setAccuracy(parseFloat(event.target.value));
  };

  const handleAffectedRateChange = (event) => {
    setAffectedRate(parseFloat(event.target.value));
  };
  

  return (
    <div>
      <div id='form' className="app-section">
        <h3 className="app-section-title" style={{textAlign:'center', color:'gray'}}>Fill the following details</h3>
        <p className="app-section-text" style={{textAlign:'center',color:'gray'}}>If required, you can search more</p>
        <div className="slider-container">
          <h3 style={{textAlign:'center', transition:'0.1s'}}>Accuracy: {accuracy}</h3>
          <input
            type="range"
            id="acc"
            name="acc"
            min="0"
            max="1"
            step="0.0002"
            value={accuracy}
            onChange={handleAccuracyChange}
            className="slider"
          />
        </div>
        <div className="slider-container">
          <h3 style={{textAlign:'center', transition:'0.1s'}}>Affected Rate: {affectedRate}</h3>
          <input
            type="range"
            id="arr"
            name="arr"
            min="0"
            max="1"
            step="0.0002"
            value={affectedRate}
            onChange={handleAffectedRateChange}
            className="slider"
          />
        </div>
      </div>
      <div id='content' className="app-section">
        
        <h3 className="app-section-title" style={{color:'gray'}}>
          <a href='C:\Users\susmi\Desktop\counter\src\world2.png' style={{position:'relative',left:'20px',color:'grey'}}>Models</a>
          <a href='C:\Users\susmi\Desktop\counter\src\world2.png' style={{position:'relative',left:'40px',color:'grey'}}>Description</a>
          <a href='C:\Users\susmi\Desktop\counter\src\world2.png' style={{position:'relative',left:'60px',color:'grey'}}>Sources</a>
        </h3>
        <h2 style={{textAlign:'center',color:'grey',top:'-40px',position:'relative'}}>TEST COUNTER</h2>
        
      </div>
      <RectangleChart accuracy={accuracy} affectedRate={affectedRate} />
    </div>
  );
};


export default App;

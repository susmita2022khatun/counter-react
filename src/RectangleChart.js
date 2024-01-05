// RectangleChart.js
import React from 'react';
import './RectangleChart.css';


const RectangleChart = ({ accuracy, affectedRate }) => {
  const newData = [];
  let no_of_tests = 0;

  while (true) {
    const d = (accuracy * affectedRate) / ((accuracy * affectedRate) + (1 - affectedRate) * (1 - accuracy));
    affectedRate = d;
    no_of_tests += 1;


    newData.push({ x: no_of_tests, y: d });

    if (Math.abs(d - 1) < 1e-10 || no_of_tests > 49) {
      break;
    }
  }

  return (
    <div id='container'>
      <div className="rectangle-chart">
        {newData.map((point, index) => (
          <div
            key={index}
            id='rect'
            className="rectangle"
            style={{
              height: `${point.y * 300}px`,
              width: '20px',
              backgroundColor: `rgb(${point.y * 255}, ${point.y * 255}, ${point.y * 255})`,
            }}
          >
            <div id='hover_board'><br></br>{point.y},{index}</div>
          </div>
        ))}
      </div>
    </div>
  );
};




export default RectangleChart;

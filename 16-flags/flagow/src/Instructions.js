import React from "react";

function Instructions({ instruction }) {
  return (
    <div className="instructions">
      <div className="inst__points">
        <ul>
          <li>{instruction[0]}</li>
          <li>{instruction[1]}</li>
          <li>{instruction[2]}</li>
          <li>{instruction[3]}</li>
        </ul>
      </div>

      <button className="start__game">Hit it!</button>
    </div>
  );
}

export default Instructions;

import React from "react";
import { getFourRandomCountries } from "./helper";

function Quiz() {
  const options = getFourRandomCountries(1);

  const correctIndex = Math.floor(Math.random() * 4);

  return (
    <div classNam="quiz">
      <div className="quiz__header">
        <div className="ques__prgress"></div>
      </div>
    </div>
  );
}

export default Quiz;

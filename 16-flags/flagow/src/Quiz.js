import React, { useEffect, useState } from "react";
import { getFourRandomCountries } from "./helper";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { numOfLives, numOfQuestion } from "./config";
import "./Quiz.css";

function Quiz() {
  const [arrayCounrties, setCountries] = useState([]);
  const [correctIndex, setCorrectIndex] = useState();
  const [lives, setLives] = useState(numOfLives);
  const [currentQuesNumber, setCurrentQuesNumber] = useState(1);
  const [options, setOptions] = useState([]);

  const startGame = function () {
    const options = getFourRandomCountries(1);
    setOptions(options);
    setCorrectIndex(options.correctOption);
    options.optionsArray.forEach((country) => {
      fetchCountries(country);
    });
  };

  const fetchCountries = async function (countryCode) {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${countryCode}`
    );

    const data = await response.json();

    setCountries((arrayCounrties) => [...arrayCounrties, data]);
  };

  useEffect(() => {
    startGame();
  }, []);

  // console.log("array   >>>", arrayCounrties);
  // console.log("arraylength   >>>", arrayCounrties.length);
  // console.log("correct >>>", correctIndex);

  const gameOver = function () {
    console.log("GameOver BUDDy");
    //
  };

  const gameWon = function () {
    console.log("You won the game");
  };

  const correctAnswer = function () {
    if (currentQuesNumber == 5) {
      gameWon();
      return;
    }
    setCountries([]);
    setCurrentQuesNumber(currentQuesNumber + 1);
    startGame();
    return;
  };

  const wrongAnswer = function () {
    if (lives == 0) {
      gameOver();
      return;
    }
    setLives(lives - 1);
    return;
  };

  const onClickAnsCheck = function (e) {
    e.preventDefault();

    // console.log(e.target.id.split(" ")[1]);
    // console.log(correctIndex);

    if (e.target.id.split(" ")[1] == correctIndex) {
      console.log("correct");
      // ans is correct
      correctAnswer();
    } else {
      console.log("wrong");
      // ans is wrong
      wrongAnswer();
    }
  };

  while (!(arrayCounrties.length >= 4 && correctIndex + 1)) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  // if (arrayCounrties && correctIndex) {
  return (
    <div className="quiz">
      <Navbar />
      <div className="quiz__timer"></div>
      <div className="ques__info">
        <div className="quiz__lives">{lives}</div>
        <div className="quiz__progress__info">
          {currentQuesNumber} / {numOfQuestion}
        </div>
      </div>

      <div className="quiz__question">
        <div className="quiz__hints">
          <div className="quiz__hint">
            <h3>Rupees</h3>
            <p>currency</p>
          </div>
          <div className="quiz__hint">
            <h3>Delhi</h3>
            <p>capital</p>
          </div>
        </div>
        <div className="quiz__question__text">
          <h3>Find the flag of </h3>
          <h2>{arrayCounrties[correctIndex].name}</h2>
        </div>
      </div>
      <div className="quiz__options">
        {arrayCounrties.map((country, i) => (
          <div
            onClick={onClickAnsCheck}
            className="quiz__option"
            key={`flag${i}`}
          >
            <img
              id={`option ${i}`}
              className="quiz__flagImg"
              src={country.flag}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
// }

export default Quiz;

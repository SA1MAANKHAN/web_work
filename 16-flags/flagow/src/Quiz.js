import React, { useEffect, useState } from "react";
import { getFourRandomCountries } from "./helper";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { numOfLives, numOfQuestion } from "./config";
import "./Quiz.css";

import { Redirect } from "react-router";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Quiz() {
  const [arrayCounrties, setCountries] = useState([]);
  const [correctIndex, setCorrectIndex] = useState();
  const [lives, setLives] = useState(numOfLives);
  const [currentQuesNumber, setCurrentQuesNumber] = useState(1);
  const [options, setOptions] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);

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

  const gameLostNow = function () {
    console.log("GameOver BUDDy");
    setGameLost(true);
    //
  };

  const gameWonNow = function () {
    console.log("You won the game");
    setGameWon(true);
  };

  const correctAnswer = function () {
    if (currentQuesNumber == 5) {
      gameWonNow();
      return;
    }
    setCountries([]);
    setCurrentQuesNumber(currentQuesNumber + 1);
    startGame();
    return;
  };

  const wrongAnswer = function () {
    if (lives == 1) {
      gameLostNow();
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

  if (gameWon) {
    return (
      <div>
        <Redirect to="/RoundWon/Won" />
      </div>
    );
  }

  if (gameLost) {
    return (
      <div>
        <Redirect to={`/RoundWon/Lost`} />
      </div>
    );
  }

  // if (arrayCounrties && correctIndex) {
  return (
    <div className="quiz">
      <Navbar />

      <div className="quiz__timer"></div>
      <div className="ques__info">
        <div className="quiz__lives">
          {Array(lives)
            .fill()
            .map((_, i) => (
              <FavoriteIcon style={{ fontSize: 40, color: "#23ecaf" }} />
            ))}
        </div>

        <div className="quiz__progress__info">
          {currentQuesNumber} / {numOfQuestion}
        </div>
      </div>

      <div className="quiz__question">
        <div className="quiz__hints">
          <div className="quiz__hint">
            <h2>{arrayCounrties[correctIndex].currencies[0].name}</h2>
            <p>currency</p>
          </div>
          <div className="quiz__hint">
            <h2>{arrayCounrties[correctIndex].capital}</h2>
            <p>capital</p>
          </div>
        </div>
        <div className="quiz__question__text">
          <h2>Find the flag of </h2>
          <h1>{arrayCounrties[correctIndex].name}</h1>
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

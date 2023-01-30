import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList";
import WinOrFailBanner from "../WinOrFailBanner/WinOrFailBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [gameStatus, setGameStatus] = useState('running');
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput guessList={guessList} setGuessList={setGuessList} gameStatus={gameStatus} setGameStatus={setGameStatus} answer={answer} numberOfGuesses={numberOfGuesses} setNumberOfGuesses={setNumberOfGuesses}/>
      {gameStatus !== "running" && <WinOrFailBanner gameStatus={gameStatus} answer={answer} numberOfGuesses={numberOfGuesses} />}
    </>
  );
}

export default Game;

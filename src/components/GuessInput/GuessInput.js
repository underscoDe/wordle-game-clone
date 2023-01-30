import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ guessList, setGuessList, answer, setGameStatus, gameStatus, numberOfGuesses, setNumberOfGuesses }) {
  const [guess, setGuess] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length !== 5) {
          window.alert("Your guess should be 5 characters long 💖");
          return;
        }
        const nextGuessList = [...guessList, guess];
        setGuessList(nextGuessList);
        setNumberOfGuesses(numberOfGuesses + 1);
        setGuess("");

        if (numberOfGuesses < NUM_OF_GUESSES_ALLOWED - 1) {
          if (answer === guess) {
            setGameStatus('win');
          }
        } else {
          if (answer === guess) {
            setGameStatus('win');
          } else {
            setGameStatus('lost');
          }
        }
        /* console.log({ guess }); */
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        required={true}
        disabled={gameStatus !== 'running'}
        minLength="5"
        maxLength="5"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        id="guess-input"
      />
    </form>
  );
}

export default GuessInput;

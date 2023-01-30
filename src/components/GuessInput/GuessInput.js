import React, { useState } from "react";

function GuessInput({ guessList, setGuessList }) {
  const [guess, setGuess] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length !== 5) {
          window.alert("Your guess should be 5 characters long 💖");
          return;
        }
        console.log({ guess });

        const nextGuessList = [...guessList, guess];
        setGuessList(nextGuessList);

        setGuess("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        required={true}
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

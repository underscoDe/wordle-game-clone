import React from "react";

function GuessInput({ guess, setGuess }) {
  return (
    <form 
      onSubmit={e => {
        e.preventDefault();
        if (guess.length != 5) {
          window.alert('Your guess should be 5 characters long');
          return
        }
        console.log({ guess });
        setGuess('');
      }}
      className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        type="text"
        required={true}
        min='5'
        max='5'
        value={guess}
        onChange={e => setGuess(e.target.value.toUpperCase())}
        id="guess-input" type="text" />
    </form>
  );
}

export default GuessInput;

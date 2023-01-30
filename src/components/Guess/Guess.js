import React from "react";
import { range } from "../../utils";

function letterStatusAgainstAnswer(letter, answer) {
  for (let ans of answer) {
    if (ans.letter === letter) return ans.status;
  }
}

function Guess({ guess, checkedGuess }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        const status = guess
          ? letterStatusAgainstAnswer(guess[num], checkedGuess)
          : undefined;
        return (
          <span key={num} className={guess ? `cell ${status}` : "cell"}>
            {guess ? guess[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

import React from "react";

function GuessTracker({ guessList }) {
  const guesses = guessList.map((guess, id) => {
    return (
      <p key={id} className="guess">
        {guess}
      </p>
    );
  });
  return <div className="guess-results">{guesses}</div>;
}

export default GuessTracker;

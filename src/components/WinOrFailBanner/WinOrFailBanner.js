import React from "react";

function WinOrFailBanner({ gameStatus: status, answer, numberOfGuesses }) {
  return (
    <>
      {status === "win" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numberOfGuesses} guesses</strong>.
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer} </strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default WinOrFailBanner;

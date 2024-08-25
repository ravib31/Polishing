const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

const pickRandomMove = () => {
  let computerMove = "";
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
};

const playGame = (playerMove) => {
  const computerMove = pickRandomMove();
  let result = "";

  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "It's a tie";
    } else if (computerMove === "Paper") {
      result = "You lose";
    } else if (computerMove === "Scissors") {
      result = "You win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win";
    } else if (computerMove === "Paper") {
      result = "It's a tie";
    } else if (computerMove === "Scissors") {
      result = "You lose";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose";
    } else if (computerMove === "Paper") {
      result = "You win";
    } else if (computerMove === "Scissors") {
      result = "It's a tie";
    }
  }

  // Update the score
  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "It's a tie") {
    score.ties += 1;
  }

  alert(
    `You picked ${playerMove}, computer picked ${computerMove}. ${result}!
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  );
};

const handleRock = () => {
  playGame("Rock");
};

const handlePaper = () => {
  playGame("Paper");
};

const handleScissors = () => {
  playGame("Scissors");
};

const handleScore = () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
};

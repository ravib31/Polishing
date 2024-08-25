let computerMove = '';
let result = "";
const pickRandomMove=()=>{
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'Scissors';
    }
}


const handleRock = () => {
   
    pickRandomMove();
   
    // console.log(computerMove);
    if(computerMove==="Rock"){
      result = "It's a tie";
    }
    else if(computerMove==="Paper"){
      result = "You lose";
    }
    else if(computerMove==="Scissors"){
      result = "You win";
    }
    alert(`You picked Rock, computer picked ${computerMove}. ${result}!`)
  };


  const handlePaper = () => {
    pickRandomMove();
    // console.log(computerMove);
    if(computerMove==="Rock"){
      result = "You win";
    }
    else if(computerMove==="Paper"){
      result = " It's a tie";
    }
    else if(computerMove==="Scissors"){
      result = "You lose";
    }
    alert(`You picked Paper, computer picked ${computerMove}. ${result}!`)
  };


  const handleScissors = () => {
    pickRandomMove();
    // console.log(computerMove);
    if(computerMove==="Rock"){
      result = "You Loose";
    }
    else if(computerMove==="Paper"){
      result = "You Win";
    }
    else if(computerMove==="Scissors"){
      result = " It's a tie";
    }
    alert(`You picked Scissors, computer picked ${computerMove}. ${result}!`)
  };

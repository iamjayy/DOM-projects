const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  switch (userInput) {
    case "rock":
      return true;
      break;
    case "paper":
      return true;
      break;
    case "scissors":
      return true;
      break;
    default:
      console.log("error");
  }
};

console.log(getUserChoice("rock"));

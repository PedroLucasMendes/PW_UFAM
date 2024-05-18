
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getComputerChoice() {
    const choices = ['Papel', 'Pedra', 'Tesoura'];
    const randomIndex = getRandomInt(0, 2);
    return choices[randomIndex];
  }
  
  function getPlayerChoice() {
    console.log("Escolha uma jogada:");
    console.log("1 - Papel");
    console.log("2 - Pedra");
    console.log("3 - Tesoura");
    let choice = parseInt(prompt("Digite o número da sua escolha: "));
    while (choice < 1 || choice > 3 || isNaN(choice)) {
      console.log("Escolha inválida! Por favor, escolha 1, 2 ou 3.");
      choice = parseInt(prompt("Digite o número da sua escolha: "));
    }
    return choice;
  }
  
  function determineWinner(playerChoice, computerChoice) {
    const choices = ['Papel', 'Pedra', 'Tesoura'];
    console.log(`A jogada do computador foi: ${computerChoice}`);
  
    if (choices[playerChoice - 1] === computerChoice) {
      return "Empate!";
    } else if (
      (choices[playerChoice - 1] === 'Papel' && computerChoice === 'Pedra') ||
      (choices[playerChoice - 1] === 'Pedra' && computerChoice === 'Tesoura') ||
      (choices[playerChoice - 1] === 'Tesoura' && computerChoice === 'Papel')
    ) {
      return "Você ganhou!";
    } else {
      return "Você perdeu!";
    }
  }
  
  function playGame() {
    let result = "Você ganhou!";
    while(result != "Você perdeu!"){
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        result = determineWinner(playerChoice, computerChoice);
        console.log(result);
    }
  }
  
  playGame();
  
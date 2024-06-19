(function () {
  let FPS = 10
  const SIZE = 40

  let board;
  let snake;
  let startGame = false;
  let endGame = false

  let status
  let pausado = false

  let point_bonus

  function init() {
    board = new Board(SIZE);
    snake = new Snake([[4, 4], [4, 5], [4, 6]])
    status = setInterval(run, 1000 / FPS)
    board.setPointingInBoard()
  }

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        snake.changeDirection(0)
        break;
      case "ArrowRight":
        snake.changeDirection(1)
        break;
      case "ArrowDown":
        snake.changeDirection(2)
        break;
      case "ArrowLeft":
        snake.changeDirection(3)
        break;
      case "s":
        if(startGame == false){
          startGame = true;
        }else if(endGame == true){
          location.reload();
        }
        
        break;
      case "p":
        if(pausado == false){
          pausado = true
          window.clearInterval(status);
        }else{
          pausado = false
          status = setInterval(run, 1000 / FPS)
        }
        break 
      default:
        break;
    }
  })

  class Board {
    constructor(size) {
      this.element = document.createElement("table")
      this.element.setAttribute("id", "board")
      this.color = "#ccc";

      this.point = 0

      this.scoreLabel = document.createElement("div")
      this.scoreLabel.setAttribute("id", "score")
      this.scoreLabel.innerHTML = "Pontuação: 0"
      document.body.appendChild(this.scoreLabel)

      this.gameOverLabel = document.createElement("div")
      this.gameOverLabel.setAttribute("id", "game-over")
      this.gameOverLabel.innerHTML = "Fim do Jogo!"
      this.gameOverLabel.style.display = "none"  
      document.body.appendChild(this.gameOverLabel)

      document.body.appendChild(this.element)
      for (let i = 0; i < size; i++) {
        const row = document.createElement("tr")
        this.element.appendChild(row);
        for (let j = 0; j < size; j++) {
          const field = document.createElement("td");
          row.appendChild(field)
        }
      }
    }
    setPointingInBoard(){
      let x = Math.floor(Math.random() * 41);
      let y = Math.floor(Math.random() * 41);

      while(snake.checkPosition(x,y) || x == 0 || y == 0){
        x = Math.floor(Math.random() * 41);
        y = Math.floor(Math.random() * 41);
      }

      this.pointPosition = [x,y]

      let probal_bonus = Math.floor(Math.random() * 3);
      if(probal_bonus === 2){
        point_bonus = true
        document.querySelector(`#board tr:nth-child(${x}) td:nth-child(${y})`).style.backgroundColor = 'red'
      }else{
        point_bonus = false
        document.querySelector(`#board tr:nth-child(${x}) td:nth-child(${y})`).style.backgroundColor = 'black'
      }
    }

    setPoint(){

      if(point_bonus === true){
        this.point += 2
      }else{
        this.point += 1
      }
      point_bonus = false
      this.updateScore()
    }

    updateScore() {
      console.log(this.point)
      this.scoreLabel.innerHTML = "Pontuação: " + this.point
    }
    
    checkLoserGame(newHead){
      if(newHead[0] > 40 || newHead[1] > 40 || newHead[0] <= 0 || newHead[1] <= 0){
        this.loserGame()
      }

    }
    
    loserGame(){
      this.showGameOver()
    }

    showGameOver() {
      window.clearInterval(status);
      endGame = true
      this.gameOverLabel.style.display = "block"
    }
  }

  class Snake {
    constructor(body) {
      this.body = body;
      this.color = "#222";
      this.direction = 1; // 0 para cima, 1 para direita, 2 para baixo, 3 para esquerda
      this.body.forEach(field => document.querySelector(`#board tr:nth-child(${field[0]}) td:nth-child(${field[1]})`).style.backgroundColor = this.color)
    }
    checkPoint(head){
      if(head[0] == board.pointPosition[0] && head[1] == board.pointPosition[1]){
        window.clearInterval(status);
        FPS += 1
        status = setInterval(run, 1000 / FPS)
        board.setPoint()
        board.setPointingInBoard()
        this.setNewHead()
      }
    }
    walk() {
      const head = this.body[this.body.length - 1];
      let newHead = [0,0];
      switch (this.direction) {
        case 0:
          newHead = [head[0] - 1, head[1]]
          break;
        case 1:
          newHead = [head[0], head[1] + 1]
          break;
        case 2:
          newHead = [head[0] + 1, head[1]]
          break;
        case 3:
          newHead = [head[0], head[1] - 1]
          break;
        default:
          break;
      }
      board.checkLoserGame(newHead)
      if(this.checkPosition(newHead[0],newHead[1])){
        board.loserGame()
      }
      this.body.push(newHead)
      this.checkPoint(newHead)
      const oldTail = this.body.shift()
      document.querySelector(`#board tr:nth-child(${newHead[0]}) td:nth-child(${newHead[1]})`).style.backgroundColor = this.color
      document.querySelector(`#board tr:nth-child(${oldTail[0]}) td:nth-child(${oldTail[1]})`).style.backgroundColor = board.color
    }
    changeDirection(direction) {
      if((this.direction == 0 && direction != 2) || (this.direction == 2 && direction != 0)){
        this.direction = direction
      }
      else if((this.direction == 1 && direction != 3) || (this.direction == 3 && direction != 1)){
        this.direction = direction
      }
      
    }

    checkPosition(x,y){
      this.body.forEach(field => {
        if(field[0] == x && field[1] == y){
          return true
        } 
      })
    }

    setNewHead(){
      const tail = this.body[0];
      let newTail;
      switch (this.direction) {
        case 0:
          newTail = [tail[0] - 1, tail[1]]
          break;
        case 1:
          newTail = [tail[0], tail[1] + 1]
          break;
        case 2:
          newTail = [tail[0] + 1, tail[1]]
          break;
        case 3:
          newTail = [tail[0], tail[1] - 1]
          break;
        default:
          break;
      }
      this.body.unshift(newTail)
    }
  }

  function run() {
    if(startGame == true){
      snake.walk()
    }
  }
  init()
})()
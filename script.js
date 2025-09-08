const holes = document.querySelectorAll('.hole');
const resultCont = document.getElementById('resultCont')
const gameCont = document.getElementById('gameCont')
const resultLetter = document.getElementById('resultLetter')
const scoreVal = document.getElementById("scoreVal");
const clickCount = document.getElementById("clickCount");
const yourScore = document.getElementById("yourScore");
let hearts = document.querySelectorAll('.hearts');
const audioSound = new Audio("./sounds/rightClick-sound.mp3")
const wrongSound = new Audio("./sounds/wrongClick-sound.mp3")
const winningSound = new Audio("./sounds/winning-sound.mp3")
const losingSound = new Audio("./sounds/fail-sound.mp3")

let score = 0;
let count = 0;
let heartIndex = 4;

document.getElementById('resultBtn').addEventListener('click', () => {

  resultCont.style.display = "none"
  count = 0;

  gameCont.style.display = "block"
})

function show() {
  const holesPort = holes[Math.floor(Math.random() * holes.length)]
  holesPort.style.background = 'url("images/moleImg2.png")'
  holesPort.classList.add("border-2")
  holesPort.style.backgroundSize = "cover"


  setTimeout(() => {
    holesPort.style.background = ""
  }, 1200);


}

function scoreCal() {
  scoreVal.textContent = "Your Score: " + score;
  yourScore.textContent = "Your Score:" + score;
  checkScore()

}

function checkScore() {
  if (score === 10) {
    gameCont.style.display = "none"
    resultCont.style.display = 'flex'
    resultLetter.innerHTML = "You won! 🎉"
    winningSound.currentTime = 0;
    winningSound.play()
    score = 0
    console.log(count)
    clickCount.textContent = `You take ${count} attempts to complete this game.`;
    scoreVal.textContent = `Score: ${score}`
    hearts.forEach((heart) => { 
      heart.classList.remove('text-black')
    })
    heartIndex = 4;

  }
  if (heartIndex === -1) {
    gameCont.style.display = "none"
    resultCont.style.display = 'flex'
    resultLetter.innerHTML = "You Lose! 😔"
    console.log(count)
    losingSound.currentTime = 0;
    losingSound.play()
    score = 0
    clickCount.textContent = `You take ${count} attempts to complete this game.`;
    scoreVal.textContent = `Your Score: ${score}`

    hearts.forEach((heart) => {
      heart.classList.remove('text-black')
    })
    heartIndex = 4;
  }

}


holes.forEach((hole) => {
  hole.addEventListener('click', () => {
    count++
    if (hole.style.background.includes("moleImg2.png")) {
      score++
      audioSound.currentTime = 0;
      audioSound.play()
      scoreCal()
      hole.style.background = ""
      console.log(`score : ${score}`)

    }
    else {
      wrongSound.currentTime = 0;
      wrongSound.play()
      heartChange()
      scoreCal()
    }



  })
})

function heartChange() {
  if (heartIndex > -1) {
    hearts.forEach(() => {
      hearts[heartIndex].classList.add("text-black")

    })
    heartIndex--
  }

}





setInterval(show, 1500)
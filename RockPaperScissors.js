let imageStorage = ["images/rock.jpeg", "images/paper.jpg", "images/scissors.jpeg"]
let playerScore = document.getElementById("player-Score")
let computerScore = document.getElementById("computer-Score")
let imageDisplayComputer = document.querySelector(".image-display-computer")
let rockBtn = document.getElementById("rock-btn")
let paperBtn = document.getElementById("paper-btn")
let scissorsBtn = document.getElementById("scissors-btn")
let roundDisplay =document.getElementById("round")
let quitBtn = document.getElementById("quit-btn")
let playAgainBtn = document.getElementById("tryAgain-btn")

let storePlayerScore = 0
let storeComputerScore = 0
let amountOfTimesPlayed = 0


function retrieveName(){
    let PlayerNameFromLocalStorage = JSON.parse(localStorage.getItem("PlayerName"))
    return PlayerNameFromLocalStorage
}
let PlayerNameFromLocalStorage = retrieveName()


function retrieveRounds(){
    let PlayerRoundsFromLocalStorage = JSON.parse(localStorage.getItem("PlayerRounds"))
    return PlayerRoundsFromLocalStorage
}
let PlayerRoundsFromLocalStorage = retrieveRounds()


function computerPlay(){
    let display = ""
    let randomNumber = 0

    for( let i = 0; i <= 1; i++){
        randomNumber = Math.floor(Math.random()*3)
        display = `<img src = ${imageStorage[randomNumber]}>`
    }

    imageDisplayComputer.innerHTML = display
    return randomNumber
}


playerScore.innerHTML = `<h1 id="player-Score">${PlayerNameFromLocalStorage} Score: ${storePlayerScore}</h1>`
rockBtn.addEventListener("click", function(){
    if(amountOfTimesPlayed === PlayerRoundsFromLocalStorage || amountOfTimesPlayed >= PlayerRoundsFromLocalStorage){
        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload();
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })
        if(storePlayerScore === storeComputerScore){
            alert("Its a tie !!")
            return
        }
        else if(storePlayerScore > storeComputerScore){
            alert("You Win !!!")
            return
        }
        else{
            alert("You lose !!!")
            return
        }
    }

    computerPlay()
    let computerChoice = computerPlay()
    if(computerChoice === 1){
        storeComputerScore = storeComputerScore + 1
    }
    else if(computerChoice === 2){
        storePlayerScore = storePlayerScore + 1
    }
    else{

    }
    playerScore.innerHTML = `<h1 id="player-Score">${PlayerNameFromLocalStorage} Score: ${storePlayerScore}</h1>`
    computerScore.innerHTML = `<h1 id="computer-Score">Computer Score: ${storeComputerScore}</h1>`

    amountOfTimesPlayed = amountOfTimesPlayed + 1
    roundDisplay.innerHTML = `<h1 id="round">Round: ${amountOfTimesPlayed}</h1>`
})

paperBtn.addEventListener("click", function(){
    if(amountOfTimesPlayed === PlayerRoundsFromLocalStorage || amountOfTimesPlayed >= PlayerRoundsFromLocalStorage){
        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload();
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })
        if(storePlayerScore === storeComputerScore){
            alert("Its a tie !!")
            return
        }
        else if(storePlayerScore > storeComputerScore){
            alert("You Win !!!")
            return
        }
        else{
            alert("You lose !!!")
            return
        }
    }

    computerPlay()
    let computerChoice = computerPlay()
    if(computerChoice === 0){
        storePlayerScore = storePlayerScore + 1
    }
    else if(computerChoice === 2){
        storeComputerScore = storeComputerScore + 1
    }
    else{

    }
    playerScore.innerHTML = `<h1 id="player-Score">${PlayerNameFromLocalStorage} Score: ${storePlayerScore}</h1>`
    computerScore.innerHTML = `<h1 id="computer-Score">Computer Score: ${storeComputerScore}</h1>`

    amountOfTimesPlayed = amountOfTimesPlayed + 1
    roundDisplay.innerHTML = `<h1 id="round">Round: ${amountOfTimesPlayed}</h1>`
})

scissorsBtn.addEventListener("click", function(){
    if(amountOfTimesPlayed === PlayerRoundsFromLocalStorage || amountOfTimesPlayed >= PlayerRoundsFromLocalStorage){
        playAgainBtn.style.display = "block"
        playAgainBtn.addEventListener("click", function(){
            location.reload();
        })

        quitBtn.style.display = "block"
        quitBtn.addEventListener("click", function(){
            window.location.href = "index.html"
        })
        if(storePlayerScore === storeComputerScore){
            alert("Its a tie !!")
            return
        }
        else if(storePlayerScore > storeComputerScore){
            alert("You Win !!!")
            return
        }
        else{
            alert("You lose !!!")
            return
        }
    }

    computerPlay()
    let computerChoice = computerPlay()
    if(computerChoice === 0){
        storeComputerScore = storeComputerScore + 1
    }
    else if(computerChoice === 1){
        storePlayerScore = storePlayerScore + 1
    }
    else{

    }
    playerScore.innerHTML = `<h1 id="player-Score">${PlayerNameFromLocalStorage} Score: ${storePlayerScore}</h1>`
    computerScore.innerHTML = `<h1 id="computer-Score">Computer Score: ${storeComputerScore}</h1>`

    amountOfTimesPlayed = amountOfTimesPlayed + 1
    roundDisplay.innerHTML = `<h1 id="round">Round: ${amountOfTimesPlayed}</h1>`
})
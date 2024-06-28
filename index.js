let nameInputEl = document.getElementById("nameInput")
let roundsInputEl = document.getElementById("roundsInput")
let submitButton = document.getElementById("submitBtn")


function validation(){
    if(!nameInputEl.value){
        alert("Name field cannot be null")
        return false
    }
    if(!roundsInputEl.value){
        alert("Rounds field cannot be null")
        return false
    }

    let rounds = parseInt(roundsInputEl.value);
    if(rounds <= 0 || isNaN(rounds)){
        alert("Amount of rounds must be more than 0")
        return false
    }
    return true
}

function saveName(){
    localStorage.setItem("PlayerName", JSON.stringify(nameInputEl.value))
}
function saveRound(){
    localStorage.setItem("PlayerRounds", JSON.stringify(roundsInputEl.value))
}

submitButton.addEventListener("click", function(event){
    event.preventDefault();

    // nameInputEl.value = ""
    // roundsInputEl.value = ""

    if(validation()){
        saveName()
        saveRound()
        window.location.href = "RockPaperScissors.html"
    }
})
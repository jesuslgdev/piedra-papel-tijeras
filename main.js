function getComputerChoice() {
    let opciones = ["rock","paper","scissors"]
    let opcionRandom = Math.floor(Math.random()*opciones.length)
    return opciones[opcionRandom]
}



function playerChoice(){
    const eleccion = prompt("¿Rock,Paper or Scissors?")
    return eleccion.toLowerCase()
}

function playRound(computerSelection,playerSelection){
    if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("Has perdido roca papel gana a roca")
        return "computer"
        
    } else if (playerSelection == "rock" && computerSelection == "scissors" ){
        console.log("Has ganado roca gana a papel")
        return "player"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("Has perdido tijera gana a papel")
        return "computer"
        
    } else if(playerSelection == "paper" && computerSelection == "rock"){
            console.log("Has ganado papel gana a roca")
            return "player"
            
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("Has ganado tijera gana a papel")
        return "player"
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log("Has perdido roca gana a tijeras")
        return "computer"
    } 
     else {
        console.log("Habeis empatado")
        return "empate"
    }
    }
    
    
    function playGame(){
        let playerScore = 0;
        let computerScore = 0;
        for(let i = 0;i<5;i++){
            const computerSelection = getComputerChoice();
            const playerSelection = playerChoice()
            const winner = playRound(computerSelection,playerSelection)
            if(winner == "player"){
                playerScore++
                console.log("Has ganado esta ronda")
            } else if (winner == "computer"){
                computerScore++
                console.log("Has perdido esta ronda")
            } else{
                console.log("Has empatado esta ronda")
            }
           



        }
        console.log("Puntuación final")
        console.log("Has ganado "+playerScore+" rondas")
        console.log("Tu rival ha ganado "+computerScore+" rondas")
        if(playerScore < computerScore){
            console.log("Has perdido el juego")
           
        }  else if(playerScore > computerScore){
            console.log("Has ganado el juego")
        } else{
            console.log("El juego ha acabado en empate")
        }
    }
playGame()
 


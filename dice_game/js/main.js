// generate 2 random numbers
// compare the numbers 
// define winner and loser 
// BONUS store the score

const playerResult = document.getElementById('playerDieResult')
const npcResult = document.getElementById('npcDieResult')

const rollDiceBtn = document.getElementById('roleDiceBtn')

function randomRoll( min, max ) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min )
}

function rollDice() {
    playerResult.innerHTML = randomRoll(1, 20)
    npcResult.innerHTML = randomRoll(1, 20)
}

rollDiceBtn.addEventListener('click', rollDice)
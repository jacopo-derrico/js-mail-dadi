// generate 2 random numbers
// compare the numbers 
// define winner and loser 
// BONUS store the score

const playerResult = document.getElementById('playerDieResult')
const npcResult = document.getElementById('npcDieResult')

const playerField = document.getElementById('playerField')
const npcField = document.getElementById('npcField')

const rollDiceBtn = document.getElementById('roleDiceBtn')

function randomRoll( min, max ) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min )
}

function rollDice() {

    playerField.classList.remove('winner', 'loser', 'tie')
    npcField.classList.remove('winner', 'loser', 'tie')

    let playerRoll = playerResult.innerHTML = randomRoll(1, 20)
    let npcRoll = npcResult.innerHTML = randomRoll(1, 20)

    if (playerRoll > npcRoll) {
        playerField.classList.add('winner')
        npcField.classList.add('loser')
    } else if ( npcRoll > playerRoll) {
        npcField.classList.add('winner')
        playerField.classList.add('loser')
    } else {
        npcField.classList.add('tie')
        playerField.classList.add('tie')
    }
}

rollDiceBtn.addEventListener('click', rollDice)


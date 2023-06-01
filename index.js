let oneEl = document.getElementById("p1-text")
let twoEl = document.getElementById("p2-text")
let playerOneCount = 0
let playerTwoCount = 0
function addOnePOne() {
    playerOneCount += 1
    oneEl.textContent = playerOneCount
}
function addTwoPOne() {
    playerOneCount += 2
    oneEl.textContent = playerOneCount
}
function addThreePOne() {
    playerOneCount += 3
    oneEl.textContent = playerOneCount
}
function addOnePTwo() {
    playerTwoCount += 1
    twoEl.textContent = playerTwoCount
}
function addTwoPTwo() {
    playerTwoCount += 2
    twoEl.textContent = playerTwoCount
}
function addThreePTwo() {
    playerTwoCount += 3
    twoEl.textContent = playerTwoCount
}
function newGame() {
    playerOneCount = 0
    playerTwoCount = 0
    oneEl.textContent = 0
    twoEl.textContent = 0
}

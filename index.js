let oneEl = document.getElementById("p1-text")
let twoEl = document.getElementById("p2-text")
let count = 0
function addOnePOne() {
    count += 1
    oneEl.textContent = count
}
function addTwoPOne() {
    count += 2
    oneEl.textContent = count
}
function addThreePOne() {
    count += 3
    oneEl.textContent = count
}
function addOnePTwo() {
    count += 1
    twoEl.textContent = count
}
function addTwoPTwo() {
    count += 2
    twoEl.textContent = count
}
function addThreePTwo() {
    count += 3
    twoEl.textContent = count
}
function newGame() {
    count = 0
    oneEl.textContent = 0
    twoEl.textContent = 0
}
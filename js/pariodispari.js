//elementi da recuperare in pagina

const pdForm = document.querySelector("#pariodispari form")
const pdInputField = document.querySelector("#pariodispari input")
const pdSelectField = document.querySelector("#pariodispari select")
const pdResultElement = document.querySelector("#pariodispari .result")

// click
pdForm.addEventListener("submit", function (e) {

    // validazione
    e.preventDefault()


    const userNumber = parseInt(pdInputField.value)
    const userChoice = pdSelectField.value

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert("devi inserire un numero da 1 a 5")
        return
    }

    if (userChoice !== "odd" && userChoice !== "even") {
        alert("devi scegliere pari o dispari")
        return
    }
    //pari o dispari 
    const cpuNumber = getRandomNumber(1, 5)

    const sum = cpuNumber + userNumber


    const rightChoice = isEven(sum) ? "even" : "odd"

    const winner = userChoice === rightChoice ? "user" : "cpu"


    pdResultElement.innerHTML = "the winner is " + winner




})
// funzione numero random
function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + 1
    return
}
// funzione pari o dispari
function isEven(num) {
    return num % 2 === 0
}
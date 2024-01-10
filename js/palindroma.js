const form = document.querySelector("#palindroma form")
const inputField = document.querySelector("#palindroma input")
const resultElement = document.querySelector("#palindroma .result")



form.addEventListener("submit", function (event) {
    event.preventDefault()

    const text = inputField.value.trim()

    if (text.length < 3) {

        alert("Il testo deve avere almeno tre caratteri")
        return
    }

    const message = isPalindrome(text) ? `la parola ${text} è palindroma` : `la parola ${text} non è palindroma`
    resultElement.innerHTML = message
})



function isPalindrome(word) {
    word = word.toLowerCase()
    const reverseWord = word.split("").reverse().join("")
    return reverseWord === word
}


const userHighScore = document.querySelector('.highscore').textContent
const userGuess = document.querySelector('.guess').value


let userScore = document.querySelector('.score').textContent
let score = 20
let highScore = 0

/* If score below 0 */
const num = function() {
    return Math.floor(Math.random() * 20) + 1
}

let numberToGuess = document.querySelector('.number').value = num()

        /* For development purposes */
console.log("-=-=-=-=-=-=- " + numberToGuess + " -=-=-=-=-=-=--")
console.log("HighScore " + highScore)


                    /* Game logic */
document.querySelector('.check').addEventListener("click", () => {

        /* Declare variable to store the players guess */
    const userGuess = document.querySelector('.guess').value

        /* If there's no number in the input box upon clicking of the button */
    if (!userGuess) {
        document.querySelector('.message').textContent = '⚠️ No number!'

    } else if (userGuess == numberToGuess) {
                /* Player wins */
        document.querySelector('.message').textContent = '🎉 Correct Number!'
        document.querySelector('.number').textContent = numberToGuess
        document.body.style.backgroundColor = "#60b347"

        if (score > highScore) {
            highScore = score
            console.log(highScore)
            document.querySelector('.highscore').textContent = highScore
        }

     } else if (userGuess > numberToGuess) {
            /* If guess greater than number and score above 0 */

        if (score > 0) {
            score--
            userScore = userScore - 1
            document.querySelector('.score').textContent = userScore
            document.querySelector('.message').textContent = "📈 Too high!"
        } else {
                 /* If score below 0 */
            document.querySelector('.message').textContent = "👎 You lose!"
        }
    } else if (userGuess < numberToGuess) {
        /* If guess Less than number and score above 0 */

        if (score > 0) {
        score--
        userScore = userScore - 1
        document.querySelector('.score').textContent = userScore
        document.querySelector('.message').textContent = "📉 Too Low!"
    } else {
             /* If score below 0 */
        document.querySelector('.message').textContent = "👎 You lose!"
    }
}
           
})


            /* Resets the game on click of button */
document.querySelector('.again').addEventListener("click", () => {
    document.querySelector('.score').textContent = 20
    document.querySelector('.guess').value = ''
    document.querySelector('.message').textContent = "Start guessing..."
    numberToGuess = document.querySelector('.number').value = num()
    console.log("-=-=-=-=-=-=- " + numberToGuess + " -=-=-=-=-=-=--")
    document.querySelector('.number').textContent = '?'
    userScore = 20
    document.body.style.backgroundColor = "#222"
})



/* eslint-disable */

let gameStart = false;

function createRestartButton() {
    let restartButton = document.createElement("button")
    restartButton.innerHTML = "restart"
    document.getElementById("screen").appendChild(restartButton)
    document.querySelector(".screen button").setAttribute("id", "restart-button")

    gameStart = !gameStart
    console.log(gameStart)

    document.querySelector(".screen button").addEventListener("click", function () {
        console.log("button is called")
        document.getElementById("screen").removeChild(document.getElementById("restart-button"))
        gameStart = !gameStart
        game.start()
        game.setScoreInterval()
    })
}



const game = new Game()

document.querySelector(".start-button").addEventListener("click", function () {
    document.getElementById("screen").removeChild(document.getElementById("start-screen-container"))
    gameStart = !gameStart
    game.setScoreInterval()
})

function setup() {
    game.setup()
}

function draw() {
    if (gameStart) game.draw()
}

/* eslint-disable */

let gameStart = false;

const game = new Game()

document.querySelector(".start-button").addEventListener("click", function () {
    document.getElementById("screen").removeChild(document.getElementById("start-screen-container"))
    gameStart = !gameStart
    console.log(gameStart)

})

function setup() {
    game.setup()
}


function draw () {
    if (gameStart) game.draw()
}

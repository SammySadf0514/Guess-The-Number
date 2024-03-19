function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let maxNumber = 10
let minNumber = 1
let gameNum = getRandomInt(minNumber,maxNumber)
console.log(gameNum)
let chances = 3
let userNum = parseInt(prompt("Guess any number: "))
while( userNum != gameNum){
    if(chances > 1){
        if(userNum > gameNum){
            userNum = parseInt(prompt("Too High! Guess Again: "))
        }
        else if(userNum < gameNum){
            userNum = parseInt(prompt("Too low! Guess Again: "))
        }
        chances--
    }
    else if(chances == 1){
        console.log("Out of Chances Sorry!")
        break
    }
    

}
if(userNum == gameNum){
    console.log("You guessed the number correctly!")
}

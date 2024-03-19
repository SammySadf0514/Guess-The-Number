function randomFromArray(array){
    const randomIndex = Math.floor(Math.random() * array.length)
    return (array[randomIndex])
}
do{
    let userInput = prompt("Enter from the 3 choices:\n(R for Rock)\n (P for Paper) \n (S for Scissors): ")
    let computerChoice = ["R","P","S"]
    let choice = randomFromArray(computerChoice) 
    console.log(choice)
    if( choice == userInput){
        alert("It's a draw!")
    }
    else if(choice == "R" && userInput =="P"){
        alert("User wins!")
    }
    else if(choice == "P" && userInput =="S"){
        alert("User wins!")
    }
    else if(choice == "S" && userInput =="R"){
        alert("User wins!")
    }
    else if(choice == "P" && userInput =="R"){
        alert("Computer Wins!")
    }
    else if(choice == "R" && userInput =="S"){
        alert("Computer Wins!")
    }
    else if(choice == "S" && userInput =="P"){
        alert("Computer Wins!")
    }
    else{
        console.error("Invalid Choice!")
    }
}while(confirm("Do you wish to play again?"))
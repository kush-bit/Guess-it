// Since prompt-sync is a Node.js-only module, 
//  we cannot use it in the browser. 
// However, if you want this game to run in a browser
// , you'll need to replace prompt() with input fields.


// const prompt = require("prompt-sync")();
// const max = prompt("enter the max number:\n");
// const random = Math.floor(Math.random()*max) + 1;
// let guess = prompt("guess the number:\n");
// while(true){
//     if(guess == "quit"){
//         console.log("user quit");
//         break;
//     }
//     if(guess == random ){
//         console.log("your guess is correct,the number was:",random);
//         break;
//     }
//     else if(guess < random){
//         guess = prompt(" clue:your guess was small,make a another try\n");
        
//     }
//     else{
//         guess = prompt(" clue:your guess was large ,make a another try\n");
//     }
// }
function startGame() {
    const max = parseInt(window.prompt("Enter the max number:"));
    if (isNaN(max) || max <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    const random = Math.floor(Math.random() * max) + 1;
    let guess = window.prompt("Guess the number:");

    while (true) {
        if (guess === null || guess.toLowerCase() === "quit") {
            alert("User quit the game.");
            break;
        }

        guess = parseInt(guess);

        if (guess === random) {
            alert(`🎉 Your guess is correct! The number was: ${random}`);
            break;
        } else if (guess < random) {
            guess = window.prompt("📉 Clue: Your guess was too small. Try again!");
        } else {
            guess = window.prompt("📈 Clue: Your guess was too large. Try again!");
        }
    }
}

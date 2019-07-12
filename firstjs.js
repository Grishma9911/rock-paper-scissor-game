var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissor_div = document.getElementById("s");

function main() {

    rock_div.addEventListener("click", function() {
        console.log("You clicked on rock.");
    })
    
    paper_div.addEventListener("click", function() {
        console.log("You clicked on paper.");
    })
    
    scissor_div.addEventListener("click", function() {
        console.log("You clicked on scissor.");
    })
    }

function getComputerChoice() { 
    var choices = ["r", "p", "s"];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// no function occuring
function convertToWord(letter) {
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    return "scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    document.getElementById("user-score").innerHTML = userScore;
    computerScore_span.innerhtml = computerScore;
    result_p.innerhtml = convertToWord(userChoice) + " beats " + convertToWord(computerChoice)  + "You Win.";
}

function loose(userChoice, computerChoice) {
    compterScore++;
    userScore_span.innerhtml = userScore;
    computerScore_span.innerhtml = computerScore;
    result_p.innerhtml = convertToWord(computerChoice) + " beats " + convertToWord(userChoice)  + "You lost.";
}

function draw(userChoice, computerChoice) {
   result_p.innerhtml = convertToWord(userChoice) + " equals " + convertToWord(computerChoice)  + "DRAW!!!!";
}

function game(userChoice) {
    var computerChoice = getComputerChoice();
    switch (userChoice) {
        case "rs":
        case "pr": 
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps": 
        case "sr":
            lose(userChoice, computerChoice);
            break; 
        case "rr":
        case "pp": 
        case "ss":
            draw(userChoice, computerChoice);
            break;   
     
    }
    var name = "grishma";
    if (name === "grishma") []
}
game("userChoice", "computerChoice");
main();


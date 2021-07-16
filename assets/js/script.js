document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){

        button.addEventListener("click", function(){

            if(this.getAttribute("data-type") === "submit") {
                 checkAnswer();
            }else if (this.getAttribute("data-type") === "refresh") {
                refresh();
            }
            else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})


function runGame(gameType){
    // Generate a number between 1 and 25


    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);

    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivitionQuestion(num1, num2);
    }
    else {
        alert(`Unknown game type ${gameType}`);
        throw ` Unknown game type ${gameType} aborting`;
    }

}

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect =  userAnswer === calculatedAnswer[0];

    if ( isCorrect) {
        alert("You got it right!!");
        incrementScore();
    } else {
        alert(`Awwwww..you said ${userAnswer}. The correct answer is ${calculatedAnswer[0]}`);
        incrementWrongAnswers();
    }

    runGame(calculatedAnswer[1]);

}

function calculateCorrectAnswer() {


    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];

    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    }
    else {
        alert(`unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting!`;
    }
}

function incrementScore(){

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswers(){

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}


function displayAdditionQuestion(operand1, operand2)  {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(operand1, operand2){

    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2){

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";

}

function displayDivitionQuestion(operand1, operand2){

    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "/";
    
    if (operand2 === 0) {
        alert(`You can't divided by zero!!`)
    }

}

function refresh() {

    location.reload();
}

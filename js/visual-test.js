const startButton = document.getElementById("start");
const evenButton = document.getElementById("even-button");
const oddButton = document.getElementById("odd-button");
const question = document.getElementById("question");
const result = document.getElementById("result");
const tries = document.getElementById("tries");
let startTime;
let remainingTries = 5;

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function askQuestion() {
const firstNum = getRandomInt(1, 100);
const secondNum = getRandomInt(1, 100);
const operation = "+";
question.textContent = `${firstNum} ${operation} ${secondNum}`;
startTime = new Date().getTime();
}

function checkAnswer(isEven) {
const answer = eval(question.textContent);
const isCorrect = isEven ? answer % 2 === 0 : answer % 2 !== 0;
const endTime = new Date().getTime();
const responseTime = endTime - startTime - 50;
if (isCorrect) {
    result.textContent = `Верно! Время ответа: ${responseTime} мс.`;
    remainingTries--;
    tries.textContent = remainingTries;
    if (remainingTries === 0) {
        evenButton.disabled = true;
        oddButton.disabled = true;
        startButton.disabled = false;
        result.textContent += " Игра окончена.";
    } else {
        askQuestion();
    }
} else {
    result.textContent = `Неверно! Время ответа: ${responseTime} мс.`;
    remainingTries--;
    tries.textContent = remainingTries;
    if (remainingTries === 0) {
        evenButton.disabled = true;
        oddButton.disabled = true;
        startButton.disabled = false;
        result.textContent += " Игра окончена.";
    } else {
        askQuestion();
    }
}
}

startButton.addEventListener("click", () => {
remainingTries = 5;
askQuestion();
startButton.disabled = true;
evenButton.disabled = false;
oddButton.disabled = false;
result.textContent = "";
tries.textContent = remainingTries;
});

document.addEventListener("keydown", (event) => {
if (event.code === "KeyS") {
    startButton.click();
} else if (event.code === "KeyA" && !evenButton.disabled) {
    checkAnswer(true);
} else if (event.code === "KeyD" && !oddButton.disabled) {
    checkAnswer(false);
}
});
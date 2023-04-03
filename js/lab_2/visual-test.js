const startButton = document.getElementById("start");
const evenButton = document.getElementById("even-button");
const oddButton = document.getElementById("odd-button");
const question = document.getElementById("question");
const result = document.getElementById("result");
const tries = document.getElementById("tries");
let startTime;
let buttonPressed = false;
let timer;
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
    timer = setTimeout(() => {
        if (remainingTries > 1) {
            remainingTries--;
            result.textContent = `Время ответа: NaN мс.`;
            tries.textContent = remainingTries
            startTime = new Date().getTime();
            askQuestion();
        } else {
            tries.textContent = "0. Игра окончена."
            startButton.disabled = false;
            wButton.disabled = true;
            dButton.disabled = true;
            aButton.disabled = true;
        }
    }, 5000); 
}

function checkAnswer(isEven) {
    const answer = eval(question.textContent);
    const isCorrect = isEven ? answer % 2 === 0 : answer % 2 !== 0;
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
        if (isCorrect) {
            result.textContent = `Верно! Время ответа: ${responseTime} мс.`;
            remainingTries--;
            if (remainingTries === 0) {
                buttonPressed = false;
                evenButton.disabled = true;
                oddButton.disabled = true;
                startButton.disabled = false;
                tries.textContent = "0. Игра окончена."
            } else {
                tries.textContent = remainingTries;
                startTime = new Date().getTime();
                askQuestion();
            }
        } else {
            result.textContent = `Неверно! Время ответа: ${responseTime} мс.`;
            remainingTries--;
            tries.textContent = remainingTries;
            if (remainingTries === 0) {
                buttonPressed = false;
                evenButton.disabled = true;
                oddButton.disabled = true;
                startButton.disabled = false;
                tries.textContent = "0. Игра окончена."
            } else {
                tries.textContent = remainingTries;
                startTime = new Date().getTime();
                askQuestion();
            }
        }
    }       

startButton.addEventListener("click", () => {
        remainingTries = 5;
        startButton.disabled = true;
        evenButton.disabled = false;
        oddButton.disabled = false;
        result.textContent = "";
        tries.textContent = remainingTries;
        startTime = new Date().getTime();
        askQuestion();
    });

document.addEventListener("keydown", (event) => {
        if (event.code === "KeyS") {
            startButton.click();
            buttonPressed = true;
        } else if (event.code === "KeyA" && buttonPressed) {
            checkAnswer(true);
        } else if (event.code === "KeyD" && buttonPressed) {
            checkAnswer(false);
        }
    });
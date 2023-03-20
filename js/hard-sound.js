const startButton = document.getElementById("start");
const evenButton = document.getElementById("even-button");
const oddButton = document.getElementById("odd-button");
const question = document.getElementById("question");
const result = document.getElementById("result");
const tries = document.getElementById("tries");
let startTime;
let remainingTries = 5;
let firstNum;
let secondNum;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function speakNumber(number) {
    const audio = new Audio(`./sounds/numbers/${number}.mp2`);
    audio.play();
}

function speakOperation(plus) {
    const audio = new Audio(`./sounds/numbers/+.mp2`)
    audio.play();
}

function delaySpeak(func, delay) {
    setTimeout(() => {
        func();
    }, delay);
}

function askQuestion() {
    firstNum = getRandomInt(1, 100);
    secondNum = getRandomInt(1, 100);
    const operation = "+";
    speakNumber(firstNum);
    startTime = new Date().getTime();
    delaySpeak(() => {
        speakOperation(operation);
    }, 1200);
    delaySpeak(() => {
        speakNumber(secondNum);
    }, 1900);
    delaySpeak(() => {
    startTime = new Date().getTime();
    }, 3100);  
}

function checkAnswer(isEven) {
    const currentTime = new Date().getTime();
    const answer = firstNum + secondNum;
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
            startTime = new Date().getTime();
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
            startTime = new Date().getTime();
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
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
let buttonPressed = false;
let soundPlayed = false;
let timer;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function speakNumber(number) {
    const audio = new Audio(`../sounds/numbers/${number}.mp2`);
    audio.play();
}

function speakOperation(plus) {
    const audio = new Audio(`../sounds/numbers/+.mp2`)
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
    soundPlayed = true;
    timer = setTimeout(() => {
        if (remainingTries > 1) {
                remainingTries--;
                result.textContent = `Время ответа: NaN мс.`;
                tries.textContent = remainingTries
                startTime = null;
                soundPlayed = false;
                startTime = new Date().getTime();
                askQuestion();
        } else {
            tries.textContent = "0. Игра окончена."
            startButton.disabled = false;
            wButton.disabled = true;
            dButton.disabled = true;
            aButton.disabled = true;
        }
    }, 7000); 
}


function checkAnswer(isEven) {
    clearTimeout(timer);
    const currentTime = new Date().getTime();
    const answer = firstNum + secondNum;
    const isCorrect = isEven ? answer % 2 === 0 : answer % 2 !== 0;
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
    if (!startTime) {
        result.textContent = `Время ответа: NaN мс.`;
        remainingTries--;
        startTime = null;
        if (remainingTries === 0) {
            buttonPressed = false;
            evenButton.disabled = true;
            oddButton.disabled = true;
            startButton.disabled = false;
            tries.textContent = "0. Игра окончена."
        } else {
            tries.textContent = remainingTries;
            askQuestion();   
        }
    } else {
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
            askQuestion(); 
        }
    } else {
        result.textContent = `Неверно! Время ответа: ${responseTime} мс.`;
        remainingTries--;
        startTime = null;
        soundPlayed = false;
        if (remainingTries === 0) {
            buttonPressed = false;
            evenButton.disabled = true;
            oddButton.disabled = true;
            startButton.disabled = false;
            tries.textContent = "0. Игра окончена."
        } else {
            tries.textContent = remainingTries;
            askQuestion();
        }
    }
}
}

startButton.addEventListener("click", () => {
    remainingTries = 5;
    startTime = null;
    startButton.disabled = true;
    evenButton.disabled = false;
    oddButton.disabled = false;
    result.textContent = "";
    tries.textContent = remainingTries;
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
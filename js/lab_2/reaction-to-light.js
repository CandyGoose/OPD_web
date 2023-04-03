const startButton = document.getElementById("start");
const colorBox = document.getElementById("color-box");
const question = document.getElementById("question");
const result = document.getElementById("result");
const timeTaken = document.getElementById("time-taken");
const tries = document.getElementById("tries");
let startTime;
let remainingTries = 5;
let buttonPressed = false;
let colorShowed = false;
let timer;

function showColor() {
    colorBox.style.backgroundColor = "yellow";
    colorShowed = true;
    timer = setTimeout(checkAnswer, 5000);
}

function delayColor(func, delay) {
    setTimeout(() => {
        if (!colorShowed) {
            func();
            }
    }, delay);
}

function askQuestion() {
    delayColor(() => {
        showColor();
        startTime = new Date().getTime();
    }, Math.random() * 5000);
}

function checkAnswer() {
    clearTimeout(timer);
    const color = colorBox.style.backgroundColor;
    if (!startTime) {
        if (remainingTries > 1) {
            remainingTries--;
            timeTaken.textContent = `Ваше время реакции: NaN мс.`;
            timeTaken.classList.remove("hidden");
            tries.textContent = remainingTries
            startTime = null;
            colorShowed = false;
            colorBox.style.backgroundColor = "#000"
            delayColor(() => {
                askQuestion();
                timeTaken.classList.add("hidden");
                result.textContent = "";
            }, 1000);
        } else {
            if (remainingTries === 0) {
                tries.textContent = "0. Игра окончена."
                timeTaken.textContent = `Ваше время реакции: NaN мс.`;
                buttonPressed = false;
                startButton.disabled = false;
                wButton.disabled = true;
            } else {
                tries.textContent = "0. Игра окончена."
                buttonPressed = false;
                startButton.disabled = false;
                wButton.disabled = true;
            } 
        }
    } else {       
        const currentTime = new Date().getTime();
        let responseTime = currentTime - startTime;
        if (responseTime > 5000) {
            if (remainingTries > 1) {
        remainingTries--;
        timeTaken.textContent = `Ваше время реакции: NaN мс.`;
        timeTaken.classList.remove("hidden");
        tries.textContent = remainingTries
        startTime = null;
        colorShowed = false;
        colorBox.style.backgroundColor = "#000"
        delayColor(() => {
            askQuestion();
            timeTaken.classList.add("hidden");
            result.textContent = "";
        }, 1000);
        } else {
        timeTaken.textContent = `Ваше время реакции: NaN мс.`;
        tries.textContent = "0. Игра окончена."
        buttonPressed = false;
        startButton.disabled = false;
        wButton.disabled = true;
        }} else {
        
        if (remainingTries > 1) {
        remainingTries--;
        timeTaken.textContent = `Ваше время реакции: ${responseTime} мс.`;
        timeTaken.classList.remove("hidden");
        tries.textContent = remainingTries
        startTime = null;
        colorShowed = false;
        colorBox.style.backgroundColor = "#000"
        delayColor(() => {
            askQuestion();
            timeTaken.classList.add("hidden");
            result.textContent = "";
        }, 1000);
        } else {
        timeTaken.textContent = `Ваше время реакции: ${responseTime} мс.`;
        tries.textContent = "0. Игра окончена."
        buttonPressed = false;
        startButton.disabled = false;
        wButton.disabled = true;
        }
    }
}
}

startButton.addEventListener("click", () => {
    startButton.disabled = true;
    remainingTries = 5;
    tries.textContent = remainingTries;
    colorShowed = false;
    startTime = null;
    colorBox.style.backgroundColor = "#000"
    askQuestion();
    result.textContent = "";
    timeTaken.classList.add("hidden");
    });

document.addEventListener("keydown", (event) => {
    if (event.code === "KeyS") {
        buttonPressed = true;
        startButton.click();
    }
    else if (event.code === "KeyW" && buttonPressed) {
        checkAnswer();
    }
});
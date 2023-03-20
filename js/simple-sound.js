const startButton = document.getElementById("start");
const evenButton = document.getElementById("even-button");
const question = document.getElementById("question");
const result = document.getElementById("result");
const timeTaken = document.getElementById("time-taken");
const tries = document.getElementById("tries");
let startTime;
let remainingTries = 5;

function playSound() {
    const audio = new Audio(`./sounds/sound.mp3`);
    audio.play();
}

function delaySound(func, delay) {
    setTimeout(() => {
        func();
    }, delay);
}

function askQuestion() {
    delaySound(() => {
        playSound();
        startTime = new Date().getTime();
    }, Math.random() * 5000);
}

function checkAnswer() {
    if (!startTime || remainingTries === 0) {
        timeTaken.textContent = `Ваше время реакции: NaN мс.`;
        timeTaken.classList.remove("hidden");
        remainingTries--;
        tries.textContent = remainingTries >= 0 ? remainingTries : 0;
    } else {
        const currentTime = new Date().getTime();
        const responseTime = currentTime - startTime - 50;
        timeTaken.textContent = `Ваше время реакции: ${responseTime} мс.`;
        timeTaken.classList.remove("hidden");
        remainingTries--;
        tries.textContent = remainingTries >= 0 ? remainingTries : 0;
        if (remainingTries === 0) {
            result.textContent += " Игра окончена.";
            startButton.disabled = false;
        } else {
            startTime = null;
            delaySound(() => {
                askQuestion();
                timeTaken.classList.add("hidden");
                result.textContent = "";
            }, 1000);
        }
    }
}

startButton.addEventListener("click", () => {
    startButton.disabled = true;
    evenButton.disabled = false;
    remainingTries = 5;
    tries.textContent = remainingTries;
    askQuestion();
    result.textContent = "";
    timeTaken.classList.add("hidden");
});

evenButton.addEventListener("click", () => {
    checkAnswer();
});

document.addEventListener("keydown", (event) => {
    if (event.code === "KeyW") {
        startButton.click();
    } else if (event.code === "KeyA" && !evenButton.disabled) {
        checkAnswer();
    }
});

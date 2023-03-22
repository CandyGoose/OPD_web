const startButton = document.getElementById("start");
const colorBox = document.getElementById("color-box");
const result = document.getElementById("result");
const tries = document.getElementById("tries");
let startTime;
let remainingTries = 5;

function getRandomColor() {
    const colors = ["blue", "yellow", "red"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showColor(color) {
    colorBox.style.opacity = 0; 
    colorBox.style.backgroundColor = color;
    setTimeout(() => {
        colorBox.style.opacity = 1; 
        startTime = new Date().getTime();
    }, 200);
}

function checkAnswer(event) {
    const color = colorBox.style.backgroundColor;
    const isCorrect = (event.code === "KeyA" && color === "blue") || (event.code === "KeyD" && color === "red") || (event.code === "KeyW" && color === "yellow");
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
    if (isCorrect) {
        if (remainingTries > 1) {
            remainingTries--;
            result.textContent = `Верно! Время реакции: ${responseTime} мс.`;
            tries.textContent = remainingTries;
            showColor(getRandomColor());
            startTime = new Date().getTime();
        } else {
            if (remainingTries === 0) {
                tries.textContent = "0. Игра окончена.";
                result.textContent = `Верно! Время реакции: ${responseTime} мс.`;
                showColor("#FFF5EE")
                startButton.disabled = false;
                aButton.disabled = true;
                dButton.disabled = true;
                wButton.disabled = true;
            } else {
                tries.textContent = "0. Игра окончена.";
                showColor("#FFF5EE")
                startButton.disabled = false;
                aButton.disabled = true;
                dButton.disabled = true;
                wButton.disabled = true;
            }
        }
    } else {
        if (remainingTries > 1) {
            result.textContent = `Неверно! Время реакции: ${responseTime} мс.`;
            remainingTries--;
            tries.textContent = remainingTries;
            showColor(getRandomColor());
            startTime = new Date().getTime();
        } else {
            if (remainingTries === 0) {
                tries.textContent = "0. Игра окончена.";
                result.textContent = `Неверно! Время реакции: ${responseTime} мс.`;
                showColor("#FFF5EE")
                startButton.disabled = false;
                aButton.disabled = true;
                dButton.disabled = true;
                wButton.disabled = true;
            } else {
                tries.textContent = "0. Игра окончена.";
                showColor("#FFF5EE")
                startButton.disabled = false;
                aButton.disabled = true;
                dButton.disabled = true;
                wButton.disabled = true;
            }
        }
    }
}

startButton.addEventListener("click", () => {
    remainingTries = 5;
    showColor(getRandomColor());
    startButton.disabled = true;
    result.textContent = "";
    tries.textContent = remainingTries;
    aButton.disabled = false;
    dButton.disabled = false;
    wButton.disabled = false;
});

document.addEventListener("keydown", (event) => {
    if (event.code === "KeyS") {
        startButton.click();
    } else if (event.code === "KeyA" || event.code === "KeyD" || event.code === "KeyW") {
        checkAnswer(event);
    }
});
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
    colorBox.style.backgroundColor = color;
    startTime = new Date().getTime();
}

function checkAnswer(event) {
    const color = colorBox.style.backgroundColor;
    const isCorrect = (event.code === "KeyA" && color === "blue") || (event.code === "KeyD" && color === "red") || (event.code === "KeyW" && color === "yellow");
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
    if (isCorrect) {
        if (remainingTries > 0) {
            remainingTries--;
            result.textContent = `Верно! Время реакции: ${responseTime} мс.`;
            tries.textContent = remainingTries;
            showColor(getRandomColor());
            startTime = new Date().getTime();
        } else {
            if (remainingTries === 0) {
                startButton.disabled = false;
                aButton.disabled = true;
                dButton.disabled = true;
                wButton.disabled = true;
                result.textContent += " Игра окончена.";
                
            } else {
                showColor(getRandomColor());
                startTime = new Date().getTime();
            }
        }
    } else {
        if (remainingTries > 0) {
            result.textContent = `Неверно! Время реакции: ${responseTime} мс.`;
            remainingTries--;
            tries.textContent = remainingTries;
            showColor(getRandomColor());
            startTime = new Date().getTime();
        } else {
            if (remainingTries === 0) {
                startButton.disabled = false;
                aButton.disabled = true;
                dButton.disabled = true;
                wButton.disabled = true;
                result.textContent += " Игра окончена.";
                
            } else {
                showColor(getRandomColor());
                startTime = new Date().getTime();
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
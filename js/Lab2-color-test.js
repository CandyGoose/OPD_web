const startButton = document.getElementById("start");
const colorBox = document.getElementById("color-box");
const result = document.getElementById("result");
const tries = document.getElementById("tries");
let startTime;
let remainingTries = 5;
let buttonPressed = false;
let colorShowed = false;
let timer;
let resultTimes = [];
let correct = 0;
document.getElementById("save").onclick = save;

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
colorShowed = true;
timer = setTimeout(() => {
if (remainingTries > 1) {
        remainingTries--;
        result.textContent = `Ваше время реакции: NaN мс.`;
        tries.textContent = remainingTries
        startTime = null;
        colorShowed = false;
        showColor(getRandomColor());
        startTime = new Date().getTime();
        } else {
            result.textContent = `Ваше время реакции: NaN мс.`;
            tries.textContent = "0. Игра окончена."
            buttonPressed = false;
            startButton.disabled = false;
            wButton.disabled = true;
            dButton.disabled = true;
            aButton.disabled = true;
        }
    }, 5000); 
}

function checkAnswer() {
    clearTimeout(timer);
    const color = colorBox.style.backgroundColor;
    const isCorrect = (event.code === "KeyA" && color === "blue") || (event.code === "KeyD" && color === "red") || (event.code === "KeyW" && color === "yellow");
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
    resultTimes.push(responseTime);
    if (isCorrect) {
        if (remainingTries > 1) {
            remainingTries--;
            result.textContent = `Верно! Время реакции: ${responseTime} мс.`;
            correct += 1;
            tries.textContent = remainingTries;
            startTime = null;
            colorShowed = false;
            showColor(getRandomColor());
        } else {
            if (remainingTries === 1) {
                tries.textContent = "0. Игра окончена.";
                result.textContent = `Верно! Время реакции: ${responseTime} мс.`;
                colorBox.style.backgroundColor = "#FFF5EE"
                buttonPressed = false;
                startButton.disabled = false;
                aButton.disabled = true;
                dButton.disabled = true;
                wButton.disabled = true;
            } else {
                tries.textContent = "0. Игра окончена.";
                colorBox.style.backgroundColor = "#FFF5EE"
                buttonPressed = false;
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
            startTime = null;
            colorShowed = false;
            showColor(getRandomColor());
        } else {
            if (remainingTries === 1) {
                tries.textContent = "0. Игра окончена.";
                result.textContent = `Неверно! Время реакции: ${responseTime} мс.`;
                colorBox.style.backgroundColor = "#FFF5EE"
                buttonPressed = false;
                startButton.disabled = false;
                aButton.disabled = true;
                dButton.disabled = true;
                wButton.disabled = true;
            } else {
                tries.textContent = "0. Игра окончена.";
                colorBox.style.backgroundColor = "#FFF5EE"
                buttonPressed = false;
                startButton.disabled = false;
                aButton.disabled = true;
                dButton.disabled = true;
                wButton.disabled = true;
            }
        }
    }
}


startButton.addEventListener("click", () => {
    startButton.disabled = true;
    remainingTries = 5;
    tries.textContent = remainingTries;
    startTime = null;
    colorShowed = false;
    showColor(getRandomColor());
    result.textContent = "";
});

document.addEventListener("keydown", (event) => {
    if (event.code === "KeyS") {
        buttonPressed = true;
        startButton.click();
        resultTimes = [];
    } else if ((event.code === "KeyA" || event.code === "KeyD" || event.code === "KeyW") && buttonPressed) {
        checkAnswer();
    }
});

async function save(){
    let result = 0;
    for (let i = 0; i < resultTimes.length; i++) {
        if(resultTimes[i] == undefined ){
            continue;
        }
        result += resultTimes[i];
    }
    result = result / resultTimes.length;
    post('/backend/save_result.php', {res: result, test_id: 1, correct: correct}, method = 'post');
    // alert(response.statusText);
    // if (response.status === 200) {
    //     window.location.reload();
    // } else {
    //     alert("Не удалось сохранить результат");
    // }
}

function post(path, params, method='post') {

    // The rest of this code assumes you are not using a library.
    // It can be made less verbose if you use one.
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = params[key];
  
        form.appendChild(hiddenField);
      }
    }
  
    document.body.appendChild(form);
    form.submit();
  }
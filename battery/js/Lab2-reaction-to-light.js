const startButton = document.getElementById("start");
const colorBox = document.getElementById("color-box");
const question = document.getElementById("question");
const result = document.getElementById("result");
const timeTaken = document.getElementById("time-taken");
const tries = document.getElementById("tries");
let startTime;
let remainingTries = 15;
let buttonPressed = false;
let colorShowed = false;
let timer;
let resultTimes = [];
let resultPost
let correct = 0
let test_id = 3

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
                save(resultTimes, test_id);
                buttonPressed = false;
                startButton.disabled = false;
                wButton.disabled = true;
            } else {
                tries.textContent = "0. Игра окончена."
                save(resultTimes, test_id);
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
        save(resultTimes, test_id);
        buttonPressed = false;
        startButton.disabled = false;
        wButton.disabled = true;
        }} else {
        
        if (remainingTries > 1) {
        remainingTries--;
        resultTimes.push(responseTime);
        correct += 1;
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
            resultTimes.push(responseTime);
        correct += 1;
        timeTaken.textContent = `Ваше время реакции: ${responseTime} мс.`;
        tries.textContent = "0. Игра окончена."
        save(resultTimes, test_id);
        buttonPressed = false;
        startButton.disabled = false;
        wButton.disabled = true;
        }
    }
}
}

startButton.addEventListener("click", () => {
    startButton.disabled = true;
    remainingTries = 15;
    tries.textContent = remainingTries;
    colorShowed = false;
    startTime = null;
    colorBox.style.backgroundColor = "#000"
    askQuestion();
    result.textContent = "";
    timeTaken.classList.add("hidden");
    });
        buttonPressed = true;
        startButton.click();
        resultTimes = [];
document.addEventListener("keydown", (event) => {
    if (event.code === "KeyW" && buttonPressed) {
        checkAnswer();
    }
});

function save(resultTimes, test_id){
    resultPost = '['
    resultPost += resultTimes.join(',');
    resultPost += ']';
    post('./backend/save_result.php', {res: resultPost, test_id: test_id, correct: null, pulse: null}, method = 'post');
    window.location.href = 'http://localhost:8888/battery/Lab3-hard_circle.php';
 }
 

function post(path, params, method='post') {
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
    const xhr = new XMLHttpRequest();
    xhr.open(method, path);
 
 
    const formData = new FormData();
    for (const key in params) {
    if (params.hasOwnProperty(key)) {
        formData.append(key, params[key]);
    }
    }
    xhr.send(formData);
 }
 
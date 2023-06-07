const startButton = document.getElementById("start");
const evenButton = document.getElementById("even-button");
const oddButton = document.getElementById("odd-button");
const question = document.getElementById("question");
const result = document.getElementById("result");
const tries = document.getElementById("tries");
let startTime;
let remainingTries = 15;
let firstNum;
let secondNum;
let buttonPressed = false;
let soundPlayed = false;
let timer;

let resultTimes = [];
let correct = [];
let resultPost
let correctPost
let test_id = 2

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
            save(resultTimes, test_id, correct);
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
    resultTimes.push(responseTime);
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
            save(resultTimes, test_id, correct);

        } else {
            tries.textContent = remainingTries;
            askQuestion();   
        }
    } else {
    if (isCorrect) {
        correct.push(1);
        result.textContent = `Верно! Время ответа: ${responseTime} мс.`;
        remainingTries--;
        if (remainingTries === 0) {
            save(resultTimes, test_id, correct);
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
        correct.push(0);
        result.textContent = `Неверно! Время ответа: ${responseTime} мс.`;
        remainingTries--;
        startTime = null;
        soundPlayed = false;
        if (remainingTries === 0) {
            save(resultTimes, test_id, correct);
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
    remainingTries = 15;
    startTime = null;
    startButton.disabled = true;
    evenButton.disabled = false;
    oddButton.disabled = false;
    result.textContent = "";
    tries.textContent = remainingTries;
    askQuestion();
});
        startButton.click();
        buttonPressed = true;
        resultTimes = [];
document.addEventListener("keydown", (event) => {
     if (event.code === "KeyA" && buttonPressed) {
        checkAnswer(true);
    } else if (event.code === "KeyD" && buttonPressed) {
        checkAnswer(false);
    }
});

function save(resultTimes, test_id, correct){
    resultPost = '['
    correctPost = '['
    resultPost += resultTimes.join(',');
    resultPost += ']';
    correctPost += correct.join(',');
    correctPost += ']';
    post('./backend/save_result.php', {res: resultPost, test_id: test_id, correct: correctPost, pulse: null}, method = 'post');
    window.location.href = 'http://localhost:8888/battery/Lab2-visual_test.php';
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
 
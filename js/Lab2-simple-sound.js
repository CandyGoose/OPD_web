const startButton = document.getElementById("start");
const question = document.getElementById("question");
const result = document.getElementById("result");
const timeTaken = document.getElementById("time-taken");
const tries = document.getElementById("tries");
let startTime;
let remainingTries = 5;
let buttonPressed = false;
let soundPlayed = false;
let timer;
let resultTimes = [];
let correct = 0;
document.getElementById("save").onclick = save;

function playSound() {
const audio = new Audio(`./sounds/sound.mp3`);
audio.play();
soundPlayed = true;
timer = setTimeout(checkAnswer, 5000);
}

function delaySound(func, delay) {
setTimeout(() => {
    if (!soundPlayed) {
    func();
    }
}, delay);
}

function askQuestion() {
delaySound(() => {
    playSound();
    startTime = new Date().getTime();
}, Math.random() * 5000);
}

function checkAnswer() {
clearTimeout(timer);
if (!startTime) {
    if (remainingTries > 1) {
    remainingTries--;
    timeTaken.textContent = `Ваше время реакции: NaN мс.`;
    timeTaken.classList.remove("hidden");
    tries.textContent = remainingTries
    startTime = null;
    soundPlayed = false;
    delaySound(() => {
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
    soundPlayed = false;
    delaySound(() => {
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
    resultTimes.push(responseTime);
    correct += 1;
    timeTaken.textContent = `Ваше время реакции: ${responseTime} мс.`;
    timeTaken.classList.remove("hidden");
    tries.textContent = remainingTries
    startTime = null;
    soundPlayed = false;
    delaySound(() => {
        askQuestion();
        timeTaken.classList.add("hidden");
        result.textContent = "";
    }, 1000);
    } else {
        resultTimes.push(responseTime);
        correct += 1;
        timeTaken.textContent = `Ваше время реакции: ${responseTime} мс.`;
        tries.textContent = "0. Игра окончена."
        buttonPressed = false;
        startButton.disabled = false;
        wButton.disabled = true;
    }}
}
}

startButton.addEventListener("click", () => {
startButton.disabled = true;
remainingTries = 5;
tries.textContent = remainingTries;
soundPlayed = false;
startTime = null;
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

async function save(){
    let result = 0;
    for (let i = 0; i < resultTimes.length; i++) {
        if(resultTimes[i] == undefined ){
            continue;
        }
        result += resultTimes[i];
    }
    result = result / resultTimes.length;
    post('/backend/save_result.php', {res: result, test_id: 4, correct: correct}, method = 'post');
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
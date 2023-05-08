const startButton = document.getElementById("start");
const evenButton = document.getElementById("even-button");
const oddButton = document.getElementById("odd-button");
const question = document.getElementById("question");
const result = document.getElementById("result");
const tries = document.getElementById("tries");
let startTime;
let buttonPressed = false;
let timer;
let remainingTries = 5;
let resultTimes = [];
let correct = 0;
document.getElementById("save").onclick = save;

    
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function askQuestion() {
    const firstNum = getRandomInt(1, 100);
    const secondNum = getRandomInt(1, 100);
    const operation = "+";
    question.textContent = `${firstNum} ${operation} ${secondNum}`;
    startTime = new Date().getTime();
    timer = setTimeout(() => {
        if (remainingTries > 1) {
            remainingTries--;
            result.textContent = `Время ответа: NaN мс.`;
            tries.textContent = remainingTries
            startTime = new Date().getTime();
            askQuestion();
        } else {
            tries.textContent = "0. Игра окончена."
            startButton.disabled = false;
            wButton.disabled = true;
            dButton.disabled = true;
            aButton.disabled = true;
        }
    }, 5000); 
}

function checkAnswer(isEven) {
    const answer = eval(question.textContent);
    const isCorrect = isEven ? answer % 2 === 0 : answer % 2 !== 0;
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
        if (isCorrect) {
            result.textContent = `Верно! Время ответа: ${responseTime} мс.`;
            resultTimes.push(responseTime);
            correct += 1;
            remainingTries--;
            if (remainingTries === 0) {
                buttonPressed = false;
                evenButton.disabled = true;
                oddButton.disabled = true;
                startButton.disabled = false;
                tries.textContent = "0. Игра окончена."
            } else {
                tries.textContent = remainingTries;
                startTime = new Date().getTime();
                askQuestion();
            }
        } else {
            result.textContent = `Неверно! Время ответа: ${responseTime} мс.`;
            resultTimes.push(responseTime);
            remainingTries--;
            tries.textContent = remainingTries;
            if (remainingTries === 0) {
                buttonPressed = false;
                evenButton.disabled = true;
                oddButton.disabled = true;
                startButton.disabled = false;
                tries.textContent = "0. Игра окончена."
            } else {
                tries.textContent = remainingTries;
                startTime = new Date().getTime();
                askQuestion();
            }
        }
    }       

startButton.addEventListener("click", () => {
        remainingTries = 5;
        startButton.disabled = true;
        evenButton.disabled = false;
        oddButton.disabled = false;
        result.textContent = "";
        tries.textContent = remainingTries;
        startTime = new Date().getTime();
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


async function save(){
    let result = 0;
    for (let i = 0; i < resultTimes.length; i++) {
        if(resultTimes[i] == undefined ){
            continue;
        }
        result += resultTimes[i];
    }
    result = result / resultTimes.length;
    post('/backend/save_result.php', {res: result, test_id: 5, correct: correct}, method = 'post');
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
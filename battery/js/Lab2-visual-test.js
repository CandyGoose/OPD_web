const startButton = document.getElementById("start");
const evenButton = document.getElementById("even-button");
const oddButton = document.getElementById("odd-button");
const question = document.getElementById("question");
const result = document.getElementById("result");
const tries = document.getElementById("tries");
let startTime;
let buttonPressed = false;
let timer;
let remainingTries = 15;
let resultTimes = [];
let correct = [];
let resultPost
let correctPost
let test_id = 5

    
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
            clearTimeout(timer)
            startTime = new Date().getTime();
            askQuestion();
        } else {
            tries.textContent = "0. Игра окончена."
            clearTimeout(timer)
            save(resultTimes, test_id, correct);
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
            correct.push(1);
            result.textContent = `Верно! Время ответа: ${responseTime} мс.`;
            resultTimes.push(responseTime);
            remainingTries--;
            if (remainingTries === 0) {
                buttonPressed = false;
                evenButton.disabled = true;
                oddButton.disabled = true;
                startButton.disabled = false;
                tries.textContent = "0. Игра окончена."
                clearTimeout(timer)
                save(resultTimes, test_id, correct);
            } else {
                tries.textContent = remainingTries;
                startTime = new Date().getTime();
                clearTimeout(timer)
                askQuestion();
            }
        } else {
            correct.push(0);
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
                clearTimeout(timer)
                save(resultTimes, test_id, correct);
            } else {
                tries.textContent = remainingTries;
                startTime = new Date().getTime();
                clearTimeout(timer)
                askQuestion();
            }
        }
    }       

startButton.addEventListener("click", () => {
        remainingTries = 15;
        startButton.disabled = true;
        evenButton.disabled = false;
        oddButton.disabled = false;
        result.textContent = "";
        tries.textContent = remainingTries;
        startTime = new Date().getTime();
        askQuestion();
    });
            startButton.click();
            buttonPressed = true;
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
        window.location.href = 'http://localhost:8888/battery/Lab4-tracking.php';
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
const numbersDiv = document.querySelector('.numbers');
const answerInput = document.querySelector('#answer');
const resultP = document.querySelector('.result');
const form = document.querySelector('form');
const startBtn = document.querySelector('#start');
const tries = document.getElementById("tries");

let reverse;
let constTries = 15
let remainingTries = constTries;
let timerId; // для хранения id таймера
let startTime; // для хранения времени начала теста

let resultTimes = [];
let correctRes = [];
let resultPost
let correctPost
let test_id = 11


function getRandomNumber() {
    return Math.random() < 0.5 ? 0 : 1;
}

// функция для генерации случайной последовательности чисел
function generateNumbers() {
    const numbers = [];
    if (remainingTries > constTries/3*2) {
        for (let i = 0; i < 2; i++) {
            numbers.push(Math.floor(Math.random() * 100));
        }
    } else if (remainingTries > constTries/3) {
        for (let i = 0; i < 3; i++) {
            numbers.push(Math.floor(Math.random() * 100));
        }
    } else {
        for (let i = 0; i < 4; i++) {
            numbers.push(Math.floor(Math.random() * 100));
        }
    }  
    return numbers;
}

// функция для отображения чисел на странице
function displayNumbers(numbers) {
    let numbersText = numbers.join(' ');
    numbersDiv.textContent = numbersText;
}


// функция для начала теста
function startLearnNumbers() {
    numbersDiv.style.display = 'initial'; // убираем числа, которые необходимо было запомнить
    form.querySelector('button[type="submit"]').style.display = 'none';
    answerInput.style.display = 'none'; 
    let numbers = generateNumbers();
    displayNumbers(numbers);


    let label = document.querySelector('label[for="answer"]'); // find the label"answer"
    label.style.display = 'none';

    // скрыть кнопку "Начать"
    startBtn.style.display = 'none';

    startTime = Date.now(); // сохраняем время начала запоминания цифр
    timerId = setTimeout(() => {
        //alert("Время вышло!");
        startGeneralTest(); // запускаем основной тест
    }, 5000); // таймер на 5 секунд
}

function startGeneralTest() {
    startBtn.style.display = 'none'; // turn off button "start"
    numbersDiv.style.display = 'none'; // убираем числа, которые необходимо было запомнить

    form.querySelector('button[type="submit"]').style.display = 'initial'; // turn on button submit
    answerInput.style.display = 'initial'; // turn on place for texting numbers

    reverse = getRandomNumber();
    let label = document.querySelector('label[for="answer"]'); // find the label"answer"
    label.style.display = 'initial';

    if (reverse === 0) {
        label.textContent = "Введите числа в порядке по умолчанию через пробел.";
    } else {
        label.textContent = "Введите числа в обратном порядке через пробел.";
    }

    answerInput.value = ''; // очищаем поле ввода ответа
    answerInput.focus(); // устанавливаем фокус на поле ввода

    clearTimeout(timerId);
    startTime = Date.now(); // сохраняем время начала теста
    timerId = setTimeout(() => {
        resultP.textContent = 'Время вышло!';
        if (remainingTries > 1) {
            remainingTries--
            tries.textContent = remainingTries
            startLearnNumbers()
        } else {
            form.querySelector('button[type="submit"]').style.display = 'none';
            remainingTries--
            tries.textContent = remainingTries
            answerInput.style.display = 'none'; 
            save(resultTimes, test_id, correctRes)
        }
    }, 18000); // таймер на 18 секунд
}


startBtn.addEventListener('click', () => {
    startLearnNumbers();
});

startBtn.click()

// обработчик события отправки формы
form.addEventListener('submit', (event) => {
    event.preventDefault(); // отменяем стандартное поведение формы
    clearTimeout(timerId);
    const answer = answerInput.value.trim(); // получаем ответ, реверсим его и удаляем пробелы в начале и конце
    let numbers
    if (reverse === 0) {
        numbers = (numbersDiv.textContent.split(' ').map(n => parseInt(n))); // получаем исходную последовательность чисел
    } else {
        numbers = (numbersDiv.textContent.split(' ').map(n => parseInt(n))).reverse(); // получаем исходную последовательность чисел
    }

    
    let correct = true; // флаг правильности ответа
    let answerNumbers = answer.split(' ').map(n => parseInt(n)); // получаем последовательность чисел из ответа
    if (answerNumbers.length !== numbers.length) {
        correct = false;
    } else {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] !== answerNumbers[i]) {
                correct = false;
                break;
            }
        }
    }
    const time = Date.now() - startTime; // вычисляем время, затраченное на решение теста
    // const seconds = Math.round(time); // переводим миллисекунды в секунды и округляем до целого числа
    if (correct) {
        resultP.textContent = `Верно. Вы решили задание за ${time} мс.`;
        resultP.style.color = 'green';
        resultTimes.push(time);
        correctRes.push(1);
    } else {
        resultP.textContent = `Неверно. Вы решили задание за ${time} мс.`;
        resultP.style.color = 'red';
        resultTimes.push(time);
        correctRes.push(0);
    }
    if (remainingTries > 1) {
        remainingTries--
        tries.textContent = remainingTries
        startLearnNumbers()
    } else {
        form.querySelector('button[type="submit"]').style.display = 'none'; 
        remainingTries--
        tries.textContent = remainingTries
        answerInput.style.display = 'none'; 
        save(resultTimes, test_id, correctRes)
    }
    //console.log(correct);
});


function save(resultTimes, test_id, correctRes){
    resultPost = '['
    correctPost = '['
    resultPost += resultTimes.join(',');
    resultPost += ']';
    correctPost += correctRes.join(',');
    correctPost += ']';
    post('./backend/save_result.php', {res: resultPost, test_id: test_id, correct: correctPost, pulse: null}, method = 'post');
    window.location.href = 'http://localhost:8888/index.php';
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
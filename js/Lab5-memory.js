const numbersDiv = document.querySelector('.numbers');
const answerInput = document.querySelector('#answer');
const resultP = document.querySelector('.result');
const form = document.querySelector('form');
const startBtn = document.querySelector('#start');
const continueBtn = document.querySelector('#continue');

let timerId; // для хранения id таймера
let startTime; // для хранения времени начала теста

let resultTimes = [];
let correctRes = [];
let resultPost
let correctPost
let test_id = 11

// функция для генерации случайной последовательности чисел
function generateNumbers() {
    const numbers = [];
    for (let i = 0; i < 3; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
}

// функция для отображения чисел на странице
function displayNumbers(numbers) {
    const numbersText = numbers.join(', ');
    numbersDiv.textContent = numbersText;
}


// функция для начала теста
function startLearnNumbers() {
    const numbers = generateNumbers();
    displayNumbers(numbers);


    let label = document.querySelector('label[for="answer"]'); // find the label"answer"
    label.textContent = "У вас есть 5 секунд на запоминание чисел.";
    label.style.display = '';

    // скрыть кнопку "Начать"
    startBtn.style.display = 'none';
    // turn on button "continue"
    continueBtn.style.display = 'initial';

    startTime = Date.now(); // сохраняем время начала запоминания цифр
    timerId = setTimeout(() => {
        //alert("Время вышло!");
        startGeneralTest(); // запускаем основной тест
    }, 5000); // таймер на 10 секунд
}

function startGeneralTest() {
    startBtn.style.display = 'none'; // turn off button "start"
    numbersDiv.style.display = 'none'; // убираем числа, которые необходимо было запомнить
    continueBtn.style.display = ''; // turn off button "continue"


    form.querySelector('button[type="submit"]').style.display = 'initial'; // turn on button submit
    answerInput.style.display = 'initial'; // turn on place for texting numbers


    let label = document.querySelector('label[for="answer"]'); // find the label"answer"
    label.textContent = "Введите числа в обратном порядке, вам дано 10 секунд.";

    answerInput.value = ''; // очищаем поле ввода ответа
    answerInput.focus(); // устанавливаем фокус на поле ввода

    clearTimeout(timerId);
    startTime = Date.now(); // сохраняем время начала теста
    timerId = setTimeout(() => {
        resultP.textContent = 'Время вышло!';
        answerInput.disabled = true;
    }, 10000); // таймер на 10 секунд

}


startBtn.addEventListener('click', () => {
    startLearnNumbers();

});

continueBtn.addEventListener('click', () => {
    startGeneralTest();

});


// обработчик события отправки формы
form.addEventListener('submit', (event) => {
    event.preventDefault(); // отменяем стандартное поведение формы
    form.querySelector('button[type="submit"]').disabled = true; // отключаем кнопку
    clearTimeout(timerId);
    const answer = answerInput.value.trim(); // получаем ответ, реверсим его и удаляем пробелы в начале и конце
    const numbers = (numbersDiv.textContent.split(',').map(n => parseInt(n))).reverse(); // получаем исходную последовательность чисел
    let correct = true; // флаг правильности ответа
    let answerNumbers = answer.split(',').map(n => parseInt(n)); // получаем последовательность чисел из ответа
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
    const seconds = Math.round(time / 1000); // переводим миллисекунды в секунды и округляем до целого числа
    if (correct) {
        resultP.textContent = `Вы решили задание за ${seconds} секунд. Поздравляем!`;
        resultTimes.push(seconds);
        correctRes.push(1);
        save(resultTimes, test_id, correctRes)
        resultP.style.color = 'green';
    } else {
        resultP.textContent = `Вы допустили ошибку. Вы решили задание за ${seconds} секунд.`;
        resultTimes.push(seconds);
        correctRes.push(0);
        save(resultTimes, test_id, correctRes)
        resultP.style.color = 'red';
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
    post('./backend/save_result.php', {res: resultPost, test_id: test_id, correct: correctPost}, method = 'post');
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
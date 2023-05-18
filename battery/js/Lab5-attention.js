let selectedWords = [];
let timerId;
let startTime;
const wordsContainer = document.querySelector('.words');
wordsContainer.classList.add('hidden'); // Добавляем CSS-класс hidden при загрузке страницы
const startButton = document.querySelector('.start-button');
const submitButton = document.querySelector('.submit-button');
submitButton.classList.add('hidden'); // Добавляем CSS-класс hidden при загрузке страницы
const tries = document.getElementById("tries");
const result = document.getElementById("result");

let constTries = 15
let remainingTries = constTries;
let num
const wordsElement = document.querySelector('.num');

let resultTimes = [];
let correct = [];
let resultPost
let correctPost
let test_id = 10


function createNums() {
    wordsContainer.innerHTML = '';

    if (remainingTries > constTries/3*2) {
    // Создание новых элементов
        for (let i = 0; i < 12; i++) {
            const word = document.createElement('span');
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            word.textContent = randomNumber;
            word.classList.add('word');
            wordsContainer.appendChild(word);
        }
    } else if (remainingTries > constTries/3) {
        // Создание новых элементов
        for (let i = 0; i < 24; i++) {
            const word = document.createElement('span');
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            word.textContent = randomNumber;
            word.classList.add('word');
            wordsContainer.appendChild(word);
        }
    } else {
    // Создание новых элементов
        for (let i = 0; i < 35; i++) {
            const word = document.createElement('span');
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            word.textContent = randomNumber;
            word.classList.add('word');
            wordsContainer.appendChild(word);
        }
    }
}


wordsContainer.addEventListener('click', (event) => {
    const word = event.target;
    if (word.classList.contains('word')) {
        if (word.classList.contains('selected')) {
            word.classList.remove('selected');
            selectedWords = selectedWords.filter((w) => w !== word.textContent);
        } else {
            word.classList.add('selected');
            selectedWords.push(word.textContent);
        }
    }
});

function startGame() {
    createNums()
    selectedWords = []; // Clear the selected words
    startTime = new Date().getTime(); // Start the timer
    submitButton.classList.remove('hidden');
    startButton.style.display = 'none'; // Hide the start button
    num = Math.floor(Math.random() * 9) + 1;
    wordsElement.innerHTML = num;
    wordsContainer.classList.remove('hidden');
    timerId = setTimeout(() => {
        const resultTime = document.createElement('p');
        resultTime.classList.add('resultTime');
        result.textContent = 'Время вышло.';
        document.querySelector('.container').appendChild(resultTime);
        if (remainingTries > 1) {
            remainingTries--
            tries.textContent = remainingTries
            startGame()
        } else {
            submitButton.style.display = 'none';
            remainingTries--
            tries.textContent = remainingTries
            save(resultTimes, test_id, correct)
        }
    }, 25000); // Finish the game in 25 seconds
}


submitButton.addEventListener('click', () => {
    event.preventDefault();
    clearTimeout(timerId); // Clear the timer if the user submits the answer before it expires
    finishGame();
});

startButton.addEventListener('click', () => {
    startGame()
});

startButton.click()
  

function finishGame() {
    const correctAnswer = Array.from(wordsContainer.children)
        .filter((word) => word.textContent.startsWith(num));
    const currentAnswer = Array.from(wordsContainer.children)
        .filter((word) => selectedWords.includes(word.textContent));

    // console.log(selectedWords);
    // console.log(correctAnswer);
    // console.log(currentAnswer);

    const resultAnswer = correctAnswer.length === currentAnswer.length &&
        correctAnswer.every((word, index) => word.textContent === currentAnswer[index].textContent);

    // console.log(resultAnswer);

    const elapsedTime = new Date().getTime() - startTime; // Calculate the elapsed time
    if (resultAnswer) {
        result.textContent = `Вы ответили правильно! Затраченное время: ${elapsedTime} мс`;
        resultTimes.push(elapsedTime);
        correct.push(1);
    } else {
        result.textContent = `Вы ответили неправильно! Затраченное время: ${elapsedTime} мс`;
        resultTimes.push(elapsedTime);
        correct.push(0);
    }

    if (remainingTries > 1) {
        remainingTries--
        tries.textContent = remainingTries
        startGame()
    } else {
        submitButton.style.display = 'none';
        remainingTries--
        tries.textContent = remainingTries
        save(resultTimes, test_id, correct)
    }
}


function save(resultTimes, test_id, correct){
    resultPost = '['
    correctPost = '['
    resultPost += resultTimes.join(',');
    resultPost += ']';
    correctPost += correct.join(',');
    correctPost += ']';
    post('./backend/save_result.php', {res: resultPost, test_id: test_id, correct: correctPost, pulse: null}, method = 'post');
    window.location.href = 'http://localhost:8888/battery/Lab3-simple_circle.php';
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

let resultTimes = [];
let correct = [];
let resultPost
let correctPost
let test_id = 12

let correctAnswer
let startTime
let num
let timerId

let constTries = 15
let remainingTries = constTries;


const ansContainer = document.querySelector('.ans');
ansContainer.classList.add('hidden'); // Добавляем CSS-класс hidden при загрузке страницы
const result = document.getElementById("result");


// Массив с названиями файлов картинок и ответами
let images1 = [
    {name: "test.png", answer: "4"},
    {name: "test.png", answer: "5"},
    {name: "test.png", answer: "1"},
    {name: "test.png", answer: "2"},
    {name: "test.png", answer: "6"},
    {name: "test.png", answer: "3"},
    {name: "test.png", answer: "6"},
    {name: "test.png", answer: "2"},
    {name: "test.png", answer: "1"},
    {name: "test.png", answer: "3"},
    {name: "test.png", answer: "4"},
    {name: "test.png", answer: "2"},
    {name: "test.png", answer: "5"},
    {name: "test.png", answer: "6"},
    {name: "test.png", answer: "1"},
    {name: "test.png", answer: "2"},
    {name: "test.png", answer: "1"},
    {name: "test.png", answer: "3"},
    {name: "test.png", answer: "5"},
    {name: "test.png", answer: "6"},
    {name: "test.png", answer: "4"},
    {name: "test.png", answer: "3"},
    {name: "test.png", answer: "4"},
    {name: "test.png", answer: "8"}
];

let images2 = [
    {name: "test.png", answer: "5"},
    {name: "test.png", answer: "3"},
    {name: "test.png", answer: "2"},
    {name: "test.png", answer: "7"},
    {name: "test.png", answer: "8"},
    {name: "test.png", answer: "4"},
    {name: "test.png", answer: "5"},
    {name: "test.png", answer: "1"},
    {name: "test.png", answer: "7"},
    {name: "test.png", answer: "1"},
    {name: "test.png", answer: "6"},
    {name: "test.png", answer: "2"},
    {name: "test.png", answer: "3"},
    {name: "test.png", answer: "4"},
    {name: "test.png", answer: "3"},
    {name: "test.png", answer: "8"},
    {name: "test.png", answer: "7"},
    {name: "test.png", answer: "6"},
    {name: "test.png", answer: "5"},
    {name: "test.png", answer: "4"},
    {name: "test.png", answer: "1"},
    {name: "test.png", answer: "2"},
    {name: "test.png", answer: "5"},
    {name: "test.png", answer: "6"}
];

let images3 = [
    {name: "test.png", answer: "7"},
    {name: "test.png", answer: "6"},
    {name: "test.png", answer: "8"},
    {name: "test.png", answer: "2"},
    {name: "test.png", answer: "1"},
    {name: "test.png", answer: "5"},
    {name: "test.png", answer: "1"},
    {name: "test.png", answer: "3"},
    {name: "test.png", answer: "6"},
    {name: "test.png", answer: "2"},
    {name: "test.png", answer: "4"},
    {name: "test.png", answer: "5"}
];

let resultDiv = document.querySelector('#result');
resultDiv.classList.add('hidden'); // Добавляем CSS-класс hidden при загрузке страницы

let form = document.querySelector('form');
form.classList.add('hidden'); // Добавляем CSS-класс hidden при загрузке страницы

const startButton = document.querySelector('.start-button');


// Выбираем случайный элемент из массива и устанавливаем его в качестве источника изображения для тега img
function randomPic(images, num) {
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImageName = images[randomIndex].name;
    correctAnswer = images[randomIndex].answer;
    let source = "../img/raven_pic/" + num + "/" + (randomIndex + 1) + "/"
    document.getElementById("raven_img").src = source + randomImageName;
    createAns(source)
}

function createAns(source) {
    ansContainer.innerHTML = '';
    if (remainingTries > constTries/3*2) {
    // Создание новых элементов
        for (let i = 1; i < 7; i++) {
            const ans = document.createElement('img');
            ans.src = `${source}/${i}.png`;
            ans.classList.add('ans');
            ans.addEventListener('click', () => checkAnswer(i)); // Добавляем обработчик события click
            ansContainer.appendChild(ans);
        }
    } else if (remainingTries > constTries/3) {
        // Создание новых элементов
        for (let i = 1; i < 9; i++) {
            const ans = document.createElement('img');
            ans.src = `${source}/${i}.png`;
            ans.classList.add('ans');
            ans.addEventListener('click', () => checkAnswer(i)); // Добавляем обработчик события click
            ansContainer.appendChild(ans);
        }
    } else {
    // Создание новых элементов
        for (let i = 1; i < 9; i++) {
            const ans = document.createElement('img');
            ans.src = `${source}/${i}.png`;
            ans.classList.add('ans');
            ans.addEventListener('click', () => checkAnswer(i)); // Добавляем обработчик события click
            ansContainer.appendChild(ans);
        }
    }
}

// Функция для проверки выбранного ответа
function checkAnswer(selectedAnswer) {
    clearTimeout(timerId)
    const isCorrect = selectedAnswer.toString() === correctAnswer; // Проверяем выбранный ответ
    const elapsedTime = new Date().getTime() - startTime; // Calculate the elapsed time
    if (isCorrect) {
        result.textContent = `Правильно. Затраченное время: ${elapsedTime} мс`;
        correct.push(1);
    } else {
        result.textContent = `Неправильно. Затраченное время: ${elapsedTime} мс`;
        correct.push(0);
    }
    resultTimes.push(elapsedTime);
    
    if (remainingTries > 1) {
        remainingTries--
        tries.textContent = remainingTries
        startGame()
    } else {
        remainingTries--
        tries.textContent = remainingTries
        clearTimeout(timerId)
        form.classList.add('hidden');
        ansContainer.classList.add('hidden');
        save(resultTimes, test_id, correct)
    }
}

function startGame() {
    startTime = new Date().getTime(); // Start the timer
    timerId = setTimeout(() => {
        resultDiv.textContent = 'Время вышло!';
        if (remainingTries > 1) {
            remainingTries--
            tries.textContent = remainingTries
            startGame()
        } else {
            remainingTries--
            tries.textContent = remainingTries
            clearTimeout(timerId)
            form.classList.add('hidden');
            ansContainer.classList.add('hidden');
            save(resultTimes, test_id, correct)
        }
    }, 20000); // Finish the game in 10 seconds

    if (remainingTries > constTries/3*2) {
        randomPic(images1, 1)
    } else if (remainingTries > constTries/3) {
        randomPic(images2, 2)
    } else {
        randomPic(images3, 3)
    }
}
//--------------------------------------------------------

startButton.addEventListener('click', () => {
    form.classList.remove('hidden');
    resultDiv.classList.remove('hidden');

    startButton.style.display = 'none'; // Hide the start button
    ansContainer.classList.remove('hidden');
    startGame()
});

startButton.click()


function save(resultTimes, test_id, correct){
    resultPost = '['
    correctPost = '['
    resultPost += resultTimes.join(',');
    resultPost += ']';
    correctPost += correct.join(',');
    correctPost += ']';
    post('./backend/save_result.php', {res: resultPost, test_id: test_id, correct: correctPost, pulse: null}, method = 'post');
    window.location.href = 'http://localhost:8888/battery/Lab5-attention.php';
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
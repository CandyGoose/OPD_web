// Создаем массив с названиями файлов картинок и ответами
const images = [
    {name: "1.d.png", answer: "d"},
    {name: "2.e.png", answer: "e"},
    {name: "3.a.png", answer: "a"},
    {name: "4.b.png", answer: "b"},
    {name: "5.f.png", answer: "f"},
    {name: "6.c.png", answer: "c"},
    {name: "7.f.png", answer: "f"},
    {name: "8.b.png", answer: "b"},
    {name: "9.a.png", answer: "a"},
    {name: "10.c.png", answer: "c"},
    {name: "11.d.png", answer: "d"},
    {name: "12.b.png", answer: "b"},
    {name: "13.a.png", answer: "a"},
    {name: "14.f.png", answer: "f"},
    {name: "15.a.png", answer: "a"},
    {name: "16.b.png", answer: "b"},
    {name: "17.a.png", answer: "a"},
    {name: "18.c.png", answer: "c"},
    {name: "19.e.png", answer: "e"},
    {name: "20.f.png", answer: "f"},
    {name: "21.d.png", answer: "d"},
    {name: "22.c.png", answer: "c"},
    {name: "23.d.png", answer: "d"},
    {name: "24.e.png", answer: "e"}
];
const submit = document.querySelector('button[type="submit"]');
submit.classList.add('hidden'); // Добавляем CSS-класс hidden при загрузке страницы

let resultDiv = document.querySelector('#result');
resultDiv.classList.add('hidden'); // Добавляем CSS-класс hidden при загрузке страницы

let form = document.querySelector('form');
form.classList.add('hidden'); // Добавляем CSS-класс hidden при загрузке страницы

const startButton = document.querySelector('.start-button');


// Выбираем случайный элемент из массива и устанавливаем его в качестве источника изображения для тега img
const randomIndex1 = Math.floor(Math.random() * images.length);
const randomImageName1 = images[randomIndex1].name;
const correctAnswer1 = images[randomIndex1].answer;

const randomIndex2 = Math.floor(Math.random() * images.length);
const randomImageName2 = images[randomIndex2].name;
const correctAnswer2 = images[randomIndex2].answer;

const randomIndex3 = Math.floor(Math.random() * images.length);
const randomImageName3 = images[randomIndex3].name;
const correctAnswer3 = images[randomIndex3].answer;

const randomIndex4 = Math.floor(Math.random() * images.length);
const randomImageName4 = images[randomIndex4].name;
const correctAnswer4 = images[randomIndex4].answer;

const randomIndex5 = Math.floor(Math.random() * images.length);
const randomImageName5 = images[randomIndex5].name;
const correctAnswer5 = images[randomIndex5].answer;
let startTime

document.getElementById("raven_img1").src = "../img/raven_pic/" + randomImageName1;
document.getElementById("raven_img2").src = "../img/raven_pic/" + randomImageName2;
document.getElementById("raven_img3").src = "../img/raven_pic/" + randomImageName3;
document.getElementById("raven_img4").src = "../img/raven_pic/" + randomImageName4;
document.getElementById("raven_img5").src = "../img/raven_pic/" + randomImageName5;

form.addEventListener('submit', function(event) {
event.preventDefault(); // Отменяем действие по умолчанию (отправку формы)
let score = 0;
for (let i = 0; i < images.length; i++) {
const question1 = "q1";
const answer1 = form.elements[question1].value;
if (answer1 === images[i].answer) {
score++;
}
const question2 = "q2";
const answer2 = form.elements[question2].value;
if (answer2 === images[i].answer) {
score++;
}
const question3 = "q3";
const answer3 = form.elements[question3].value;
if (answer3 === images[i].answer) {
score++;
}
const question4 = "q4";
const answer4 = form.elements[question4].value;
if (answer4 === images[i].answer) {
score++;
}
const question5 = "q5";
const answer5 = form.elements[question5].value;
if (answer5 === images[i].answer) {
score++;
}
}
score = Math.round(score/4);
if (score > 5) score = 5
const elapsedTime = new Date().getTime() - startTime; // Calculate the elapsed time
resultDiv.textContent = `Вы набрали ${score} из 5 баллов. Затраченное время: ${elapsedTime} мс`;
clearTimeout(timerId)
});


startButton.addEventListener('click', () => {
selectedWords = []; // Clear the selected words
startTime = new Date().getTime(); // Start the timer
form.classList.remove('hidden');
resultDiv.classList.remove('hidden');
submit.classList.remove('hidden');

startButton.style.display = 'none'; // Hide the start button
timerId = setTimeout(() => {
    resultDiv.textContent = 'Time is out!';
}, 20000); // Finish the game in 20 seconds
});
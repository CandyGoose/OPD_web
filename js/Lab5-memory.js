let selectedWords = [];
let timerId;
let startTime;
const wordsContainer = document.querySelector('.words');
wordsContainer.classList.add('hidden'); // Добавляем CSS-класс hidden при загрузке страницы
const startButton = document.querySelector('.start-button');
const submitButton = document.querySelector('.submit-button');
submitButton.classList.add('hidden'); // Добавляем CSS-класс hidden при загрузке страницы

let num
const wordsElement = document.querySelector('.num');

for (let i = 0; i < 10; i++) {
  const word = document.createElement('span');
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  word.textContent = randomNumber;
  word.classList.add('word');
  wordsContainer.appendChild(word);
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

submitButton.addEventListener('click', () => {
    clearTimeout(timerId); // Clear the timer if the user submits the answer before it expires
    finishGame();
});

startButton.addEventListener('click', () => {
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
        resultTime.textContent = 'Time is out !';
        document.querySelector('.container').appendChild(resultTime);
        finishGame();
    }, 10000); // Finish the game in 10 seconds
  });
  

  function finishGame() {
    const correctAnswer = Array.from(wordsContainer.children)
        .filter((word) => word.textContent.startsWith(num));
    const currentAnswer = Array.from(wordsContainer.children)
        .filter((word) => selectedWords.includes(word.textContent));
    console.log(selectedWords);
    // console.log(correctAnswer);
    // console.log(currentAnswer);

    const resultAnswer = correctAnswer.length === currentAnswer.length &&
        correctAnswer.every((word, index) => word.textContent === currentAnswer[index].textContent);

    console.log(resultAnswer);

    const resultP = document.createElement('p');
    resultP.classList.add('result');
    const elapsedTime = new Date().getTime() - startTime; // Calculate the elapsed time
    if (resultAnswer) {
        resultP.textContent = `Вы ответили правильно! Затраченное время: ${elapsedTime} мс`;
    } else {
        resultP.textContent = `Вы ответили неправильно! Затраченное время: ${elapsedTime} мс`;
    }
    
    const form = document.querySelector('form');
    form.appendChild(resultP); // добавляем результат в форму

    submitButton.disabled = true; // Делаем кнопку проверки неактивной после ее нажатия
}


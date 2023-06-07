const circle = document.querySelector('#circle');
const containerWidth = document.querySelector('#container').offsetWidth;
const circleWidth = circle.offsetWidth;
const message = document.querySelector('#message');
let returnStartTime;
let timerId;
let distanceX
var startButton = document.getElementById("start");
let results = [];
let resultPost
let test_id = 9


function updateTimer(timeLeft) {
  // Таймер для обновления каждую секунду
  var timer = setInterval(function() {
      timeLeft--;
      if (timeLeft >= 0) {
          var minutes = Math.floor(timeLeft / 60);
          var seconds = timeLeft % 60;
          var timeString = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2); // форматировать время в виде "мм:сс"
          $("#timer").text(timeString);
      } else {
          save(results, test_id);
          circle.style.left = 0; // перемещение в центр
          canMoveCircle = false;
          isMoving = false;
          $("#circle").addClass("hidden");
          $("#message").addClass("hidden");
          $("#end").removeClass("hidden");
          clearInterval(timer);
      }
  }, 1000);
}

function startGame() {
  var minutes = parseInt($("#minutes").val());
  var seconds = parseInt($("#seconds").val());
  if ((isNaN(minutes) || isNaN(seconds)) || (minutes < 0) || (minutes > 45) || (seconds < 0) || (seconds > 59)) {
      alert("Введите время от 1 до 45 минут.");
      return;
  }
  $("#start").addClass("hidden");
  startButton.disabled = true;
  game();
  var timeLeft = minutes * 60 + seconds;
  var timeString = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2); // форматировать время в виде "мм:сс"
  $("#timer").text(timeString);
  updateTimer(timeLeft);
}

function game() {
  setInterval(() => {
    const randomPosition = Math.random();
    const containerWidth = document.querySelector('#container').offsetWidth;
    const circleWidth = circle.offsetWidth;
    const leftPosition = randomPosition * containerWidth;
    circle.style.left = leftPosition + 'px';
  }, 1500);

  const circle = document.querySelector('#circle');

  circle.addEventListener('mousemove', (event) => {
    let newLeft
    let circleRect = circle.getBoundingClientRect();
    let circleCenterX = circleRect.left + circleRect.width / 2;
    let cursorX = event.clientX;
    distanceX = circleCenterX - cursorX;
    if (circleCenterX > cursorX) {
        newLeft = circleRect.left + distanceX + 500;
    } else {
        newLeft = circleRect.left - distanceX - 500;
    }
    
    circle.style.left = newLeft + 'px';
  });

  setInterval(() => {
    let circle = document.querySelector('#circle');
    let circleRect = circle.getBoundingClientRect();
    let circleCenterX = circleRect.left + circleRect.width / 2;
    let distance = Math.abs(circleCenterX - circleRect.left);
    let containerCenter = containerWidth / 2;
    let distanceFromCenter = Math.abs(containerCenter - circleCenterX) / 35;
    document.querySelector('#message').innerHTML = `Расстояние до центра: ${distanceFromCenter.toFixed(2)} см`;
    results.push(distance.toFixed(2));
  }, 3000);
}


startButton.addEventListener('click', startGame);






  //--------------------------------------------------------------
  function save(results, test_id){
    resultPost = '['
    resultPost += results.join(',');
    resultPost += ']';
    post('./backend/save_result.php', {res: resultPost, test_id: test_id, correct: null, pulse: null}, method = 'post');
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
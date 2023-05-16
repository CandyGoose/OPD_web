const circle = document.querySelector('#circle');
const containerWidth = document.querySelector('#container').offsetWidth;
const circleWidth = circle.offsetWidth;
let isMoving = false;
let isDragging = false;
let canMoveCircle = false; 
const message = document.querySelector('#message');
let returnStartTime;
let timerId;
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
	var minutes = 2;
	var seconds = 0;
	if ((isNaN(minutes) || isNaN(seconds)) || (minutes < 0) || (minutes > 45) || (seconds < 0) || (seconds > 59)) {
		alert("Введите время от 1 до 45 минут.");
		return;
	}
	$("#start").addClass("hidden");
	startButton.disabled = true;
  setBreak()
	var timeLeft = minutes * 60 + seconds;
	var timeString = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2); // форматировать время в виде "мм:сс"
	$("#timer").text(timeString);
	updateTimer(timeLeft);
}


function moveCircle() {
  if (!isMoving && !isDragging && !canMoveCircle) {
    let leftPosition;
    let distanceFromCenter;
    do {
      const randomPosition = Math.random();
      leftPosition = randomPosition * (containerWidth - circleWidth);
      const containerCenter = containerWidth / 2;
      const circleCenter = leftPosition + circleWidth / 2;
      distanceFromCenter = Math.abs(containerCenter - circleCenter);
    } while (distanceFromCenter < 100);
    circle.style.left = leftPosition + 'px';
    isMoving = true;
    canMoveCircle = true;
    returnStartTime = Date.now();
    timerId = setTimeout(function() {
      let circlePosition = circle.getBoundingClientRect();
      const containerCenter = containerWidth / 2;
      let leftPosition = circlePosition.left + 20 - containerCenter; // 20 это радиус круга
      const step = 10;
      const interval = setInterval(() => {
        if ((Math.abs(leftPosition) < 10*step) && (Math.abs(leftPosition) >= 0)){ // если осталось переместить меньше, чем на 10 шагов
          clearInterval(interval);
          circle.style.left = containerCenter + 'px'; // перемещение в центр
          isMoving = false;
          canMoveCircle = false;
          const returnTime = Date.now() - returnStartTime;
          clearTimeout(timerId);
          setBreak()
        } else {
          clearInterval(interval);
          circle.style.left = containerCenter + 'px'; // перемещение в центр
          isMoving = false;
          canMoveCircle = false;
          clearTimeout(timerId);
          setBreak()
        } 
      });
    }, 5000);
  }
}

function startDragging(event) {
  if (canMoveCircle && event.button === 0) {
    isDragging = true;
  }
  isMoving = false;
  clearTimeout(timerId);
}

function dragCircle(event) {
  if (canMoveCircle && isDragging) {
    const containerCenter = containerWidth / 2;
    const circleLeft = parseInt(circle.style.left) || 0;
    let mouseX = event.clientX;
    let circleX = mouseX - 10; // 10 это радиус круга

    if (circleX < 0) {
      circleX = 0;
      mouseX = circleWidth / 2;
    } else if (circleX > containerWidth) {
      circleX = containerWidth;
      mouseX = containerWidth + circleWidth / 2;
    }

    circle.style.left = circleX + 'px';
    isMoving = true;
    clearTimeout(timerId);
  }
}


      function stopDragging(event) {
  if (event.button === 0) {
    isDragging = false;
    if (isMoving) {
      let circlePosition = circle.getBoundingClientRect();
      const containerCenter = containerWidth / 2;
      let leftPosition = circlePosition.left + 20 - containerCenter; // 20 это радиус круга
      const step = 10;
      const interval = setInterval(() => {
        if ((Math.abs(leftPosition) < 10*step) && (Math.abs(leftPosition) >= 0)){ // если осталось переместить меньше, чем на 10 шагов
          clearInterval(interval);
          circle.style.left = containerCenter + 'px'; // перемещение в центр
          isMoving = false;
          canMoveCircle = false;
          const returnTime = Date.now() - returnStartTime;
          if (returnTime > 5000) {
            message.textContent = `Время вышло.`;
          } else {
            message.textContent = `Круг вернулся в центр за ${returnTime} мс`;
            results.push(returnTime);
          }
          clearTimeout(timerId);
        } else {
          clearInterval(interval);
          circle.style.left = containerCenter + 'px'; // перемещение в центр
          isMoving = false;
          message.textContent = `Круг не доведен до центра.`;
          canMoveCircle = false;
          clearTimeout(timerId);
        } 
      });
    }
  }
}


  circle.addEventListener('mousedown', startDragging);
      document.addEventListener('mousemove', dragCircle);
      document.addEventListener('mouseup', stopDragging);

      function setBreak() {
        const interval = 3000 + Math.floor(Math.random() * 2000);
        setTimeout(function() {
          moveCircle();
          setTimeout(arguments.callee, interval);
        }, interval);
  }

  startButton.addEventListener('click', startGame);
  startButton.click()


  function save(results, test_id){
    resultPost = '['
    resultPost += results.join(',');
    resultPost += ']';
    post('./backend/save_result.php', {res: resultPost, test_id: test_id, correct: null, pulse: null}, method = 'post');
    window.location.href = 'http://localhost:8888/battery/Lab5-thinking.php';
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
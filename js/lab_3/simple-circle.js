var startButton = document.getElementById("start");
var buttonPressed = false;
var tm
const minSpeed = 2000; // минимальная скорость вращения
const maxSpeed = 5000; // максимальная скорость вращения
$("#container > p").html("<br><h4> <span id='timer'>00:00</span></h4>");
$("#result").text("NaN");
var interval
// Получить текущий угол поворота
(function($) {
$.fn.rotationDegrees = function() {
	var matrix = this.css("-webkit-transform") ||
	this.css("-moz-transform") ||
	this.css("-ms-transform") ||
	this.css("-o-transform") ||
	this.css("transform");
	if (typeof matrix === 'string' && matrix !== 'none') {
		var values = matrix.split('(')[1].split(')')[0].split(',');
		var a = values[0];
		var b = values[1];
		var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
	} else {
		var angle = 0;
	}
	return angle;
};
}(jQuery));

jQuery.fn.rotate = function(degrees) {
	$(this).css({
		'-webkit-transform': 'rotate(' + degrees + 'deg)',
		'-moz-transform': 'rotate(' + degrees + 'deg)',
		'-ms-transform': 'rotate(' + degrees + 'deg)',
		'transform': 'rotate(' + degrees + 'deg)'
	});
	return $(this);
};



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
			clearInterval(timer);
			endGame();
		}
	}, 1000);
}


function startGame() {
	var minutes = parseInt($("#minutes").val());
	var seconds = parseInt($("#seconds").val());
	if ((isNaN(minutes) || isNaN(seconds)) || (minutes < 0) || (minutes > 45) || (seconds < 0) || (seconds > 59)) {
		alert("Введите время от 1 до 45 минут.");
		buttonPressed = false;
		return;
	}
	$("#start").addClass("hidden");
	startButton.disabled = true;
	buttonPressed = true;
	inaccuracy = 0
	rotatePoint()
	var timeLeft = minutes * 60 + seconds;
	var timeString = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2); // форматировать время в виде "мм:сс"
	$("#timer").text(timeString);
	updateTimer(timeLeft);
	$("#circle").rotate(rotationSpeed); // установить начальную скорость вращения

}

function endGame() {
	clearInterval(timer);
	$("#circle").addClass("hidden");
	$("#circle2").addClass("hidden");
	$("#container > p").addClass("hidden");
	$("#user-result").addClass("hidden");
	$("#end").removeClass("hidden");
}

function checkTime() {
	setTimeout(function() {
		if (!pressed) {
			$("#result").text("Miss");
			inaccuracy -= 30
			rotatePoint()
		} else { 
			pressed = false
			clearTimeout();
			return
		}
  }, tm);
}

function rotatePoint() {
	var speed = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed + inaccuracy;
	$("#circle").rotate(speed);
	tm = (6000 / (speed - inaccuracy)) * 1000
	inaccuracy += 360
	checkTime()	
}


function checkAnswer(){
	var angle = $("#circle2").rotationDegrees();
	var unghi = $("#circle").rotationDegrees();
	if (unghi < angle + 30 && unghi > 0) {
		$("#result").text("+" + unghi);
		inaccuracy -= unghi
		rotatePoint()
		// Попадание -
	} else {
		if (unghi > angle - 30 && unghi < 0) {
			$("#result").text(unghi);
			inaccuracy -= unghi
			rotatePoint()
			// Попадание +
		} else {
			if (unghi === 0) {
				$("#result").text(0);
				rotatePoint()
				// Попадание 100%
			} else if (unghi < 0) {
			inaccuracy -= unghi
			// Мимо
			$("#result").text("Miss");
			rotatePoint()
			} else {
				inaccuracy += unghi
				// Мимо
				$("#result").text("Miss");
				rotatePoint()
			}
			
		}
	}
}


startButton.addEventListener("click", () => {
	startGame();
});

document.addEventListener("keydown", (event) => {
if (event.code === "KeyS" && !buttonPressed) {
	pressed = false
	startButton.click();
}
else if (event.code === "KeyW" && buttonPressed) {
	pressed = true
	checkAnswer();
}
});
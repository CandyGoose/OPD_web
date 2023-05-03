const circle = document.querySelector('#circle');
      let timerId;
    var startButton = document.getElementById("start");
    let results = [];

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
      circle.style.left = 0; // перемещение в центр
      canMoveCircle = false;
      isMoving = false;
      $("#circle").addClass("hidden");
      $(".green-circle").addClass("hidden");
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
        const leftPosition = randomPosition * (containerWidth);
        circle.style.left = leftPosition + 'px';
      }, 1500);

      const greenCircle = document.querySelector('.green-circle');
        document.addEventListener('mousemove', event => {
        const containerWidth = document.querySelector('#container').offsetWidth;
        const circleWidth = greenCircle.offsetWidth;
        const mouseX = event.clientX;
        const leftPosition = mouseX;
        if (leftPosition > 0 && leftPosition < containerWidth) {
            greenCircle.style.left = leftPosition + 'px';
        }
        });

        setInterval(() => {
        const redCircle = document.querySelector('#circle');
        const greenCircle = document.querySelector('.green-circle');
        const distance = Math.abs(redCircle.getBoundingClientRect().left - greenCircle.getBoundingClientRect().left) / 16; // 1 pixel = 0.0625cm
        document.querySelector('#message').innerHTML = `Distance: ${distance.toFixed(2)}cm`;
        results.push(distance.toFixed(2));
        }, 500);
    }

    startButton.addEventListener('click', startGame);
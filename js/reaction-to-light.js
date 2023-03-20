let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let canvas_parent = document.querySelector('.canvas-parent');

function resizeCanvas() {
    let parent_height = canvas_parent.clientHeight;
    let parent_width = canvas_parent.clientWidth;

    canvas.height = parent_height;
    canvas.width = parent_width;

    context.textAlign = "center";
    context.textBaseline = "middle";
}

resizeCanvas();

// обработчик события изменения размера окна браузера
window.addEventListener('resize', resizeCanvas);


let start = document.getElementById('start');
let time_text = document.getElementById('time-text');

let GameStatus ={
    STOP:1,
    START:2,
}

let status = GameStatus.STOP;

function get_random_time(min,max){
    let result = Math.floor(Math.random()*Math.floor(max))+min;
    result = result*1000;
    return result;
}

function end_game(){
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    canvas.style.background = "#5DC999";
    start.innerHTML = "Start Game (D)";
    status = GameStatus.STOP;
    console.log('game has ended');
}

function timeout1_funtion(time){
    timeout1 = setTimeout(function(){
        canvas.style.background = "#fffec9";
        let date1 = new Date();
        time_now = date1.getTime();

        document.addEventListener('keydown', function(event) {
            if (event.code === 'KeyW') {
                let date2 = new Date();
                time_later = date2.getTime();
                play_time = (time_later - time_now);
                if (play_time < time) {
                    time_text.innerHTML = play_time + " ms";
                } else {
                    time_text.innerHTML = "You pressed early";
                }
            }
        });
    }, time);
}

function timeout2_funtion(time){
    timeout2 = setTimeout(function(){
        end_game();
    }, time);
}

function start_game(){
    let change_time = get_random_time(1, 8);
    let end_time = change_time + 5000;
    status = GameStatus.START;
    canvas.style.background = "black";

    timeout1_funtion(change_time);
    timeout2_funtion(end_time);
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyA' && status === GameStatus.START) {
        end_game();
    } else if (event.code === 'KeyD' && status === GameStatus.STOP) {
        start_game();
        start.innerHTML = "Stop Game (A)";
    }
});

//Код реагирует на нажатия клавиш A и D, а также на W при активном статусе игры. Нажатие на клавишу W запускает проверку времени, прошедшего между началом игры и моментом клика.
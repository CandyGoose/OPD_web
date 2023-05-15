<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attention</title>
    <link href='https://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="./css/attention.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>

<body>
<?php
    include "menu.php";
?>
    <div class="container1">
    <h1>Тест на внимание</h1>
        <form>
            <p>Выберите все числа, начинающиеся на цифру <span class="num"></span></p>
            
            <div class="words hidden"> 
                <!-- Добавляем CSS-класс hidden -->
            </div>
            <button type="submit" class="submit-button hidden">Проверить</button>
            <p></p>
            <button type="button" class="start-button">Старт</button>
            <p id="result" style="color: #000000;"></p>
            <p style="color: #000000;">Осталось примеров: <span id="tries">15</span></p>
        </form>
    </div>
  
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./js/Lab5-attention.js"></script>
    <script src="./js/menu.js"></script>
</body>

</html>
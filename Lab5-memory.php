<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory</title>
    <link href='https://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="./css/memory.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>

<body>
<?php
    include "menu.php";
?>
    <div class="container">
    <h1>Тест на оперативную память</h1>
        <form>
            <button type="button" id="start">Начать</button>
            <button type="button" id="continue">Продолжить</button>
            <div class="numbers"></div>
            <label for="answer"></label>
            <input type="text" id="answer" name="answer" required>
            <button type="submit">Проверить</button>
            <p class="result"></p>
        </form>
    </div>
  
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./js/Lab5-memory.js"></script>
    <script src="./js/menu.js"></script>
</body>

</html>
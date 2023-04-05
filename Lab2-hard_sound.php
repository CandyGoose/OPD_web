<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HardSound</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>

<body>
<?php
    include "menu.php";
?>

    <header class="header" style="background: #FFF5EE;">
        <div class="header__wrapper">
            <h1 class="header__title" style="color: #000; border-bottom: 1px solid #000000;">
                Hard Sound
            </h1>
            <div class="header__text">
                Оценка сложных сенсомоторных реакций человека:
                <p class="information" style="font-style: italic; font-size: 20px;">оценка скорости реакции на сложный звуковой сигнал – сложение в уме (чет / нечет)</p>
            </div>
        </div>
    </header>     

    <div class="section">
        <div class="container">
            <div class="score" style="background: #FFF5EE;">
                <div class="section-0">
                    <button id="even-button" disabled>Четное (A)</button>
                    <button id="odd-button" disabled>Нечетное (D)</button>
                </div>
                <div class="section-1">
                    <button id="start" type="button">Start Game (S)</button>
                    <p id="question" style="color: #000;"></p>
                    <p id="result" style="color: #000;"></p>
                </div>
                <div class="section-2" style="padding: 10px 0px 10px 0px;">
                    <p style="color: #000;">Осталось примеров: <span id="tries">5</span></p>
                    <button class="submit btn btn-outline-success" style="color: #fff;background: linear-gradient(135deg, #71b7e6, #9b59b6);" disabled>Save</button>
                </div>
            </div>
        </div>    
    </div>    
</body>

<script src="./js/Lab2-hard-sound.js"></script>
<script src="./js/menu.js"></script>

</html>

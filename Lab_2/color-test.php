<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ColorTest</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>

<body>
<?php
    include "../menu.php";
?>

    <header class="header">
        <div class="header__wrapper">
            <h1 class="header__title" style="color: #000000; border-bottom: 1px solid #000000;">
                Color Test
            </h1>
            <div class="header__text">
                Оценка сложных сенсомоторных реакций человека:
                <p class="information" style="font-style: italic; font-size: 20px;">оценка скорости реакции на разные цвета (не менее 3-х цветов)</p>

                <div class="section-0">
                    <p style="border-radius: 5px; padding: 0px 28px; background-color: blue;">A</p>
                    <p style="border-radius: 5px; padding: 0px 28px; background-color: yellow;">W</p>
                    <p style="border-radius: 5px; padding: 0px 28px; background-color: red;">D</p>
                </div>
            </div>
        </div>
    </header> 

    <div class="section">
        <div class="container">
            <div class="score" style="background: #FFF5EE;">
                <div id="color-box"></div>
                <div class="section-0">
                </div>
                <div class="section-1">
                    <button id="start" type="button">Start Game (S)</button>
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

<script src="../js/lab_2/color-test.js"></script>
<script src="../js/menu.js"></script>

</html> 
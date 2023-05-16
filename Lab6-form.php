<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
<?php
    include "menu.php";
?>

    <header class="header">
        <div class="header__wrapper">
            <h1 class="header__title" style="color: #000; border-bottom: 1px solid #000000;">
                RESULT
            </h1>
        </div>
    </header>

    <main class="section">
        <div class="container">
            <ul class="content-list">
                <div class="form-left-decoration"></div>
                <div class="form-right-decoration"></div>
                <div class="circle"></div>
                <div class="form-inner">
                <h3>Внесите результаты пульса через пробел</h3>
                <form id="pulse-form" action="http://localhost:8888/backend/update_pulse.php" method="post">
                    <select id="test-name" name="test_id">
                        <option value="3">Тест на светоощущение</option>
                        <option value="4">Тест на звуковой сигнал</option>
                        <option value="1">Тест на цвет</option>
                        <option value="2">Тест на звук</option>
                        <option value="5">Тест на визуальное восприятие</option>
                        <option value="6">Тест на круг</option>
                        <option value="7">Тест на три круга</option>
                        <option value="8">Тест на слежение с преследованием</option>
                        <option value="9">Тест на аналоговое слежение</option>
                        <option value="10">Тест на внимательность</option>
                        <option value="11">Тест на память</option>
                        <option value="12">Тест на мышление</option>
                        <option value="13">До теста</option>
                        <option value="14">После теста</option>
                    </select><br> 
                    <br>
                    <input placeholder="Пульс уд/мин" type="textarea" style="background-color: white;" name="puls" id="pulse-input"><br>
                    <br>
                    <input type="submit" value="Добавить" class="btn">
                </form>
                </div>
            </ul>
        </div>
    </main>
    <script src="./js/menu.js"></script>
    <script src="./js/Lab6-form.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
<?php
    include "menu.php";
?>

    <main class="section">
        <div class="container">
            <h2 class="title-1">Professions</h2>
            <ul class="professions" id="professions">
                <li class="profession">
                    <a href="Lab1-profession_page.php">
                        <img src="./img/professions/prof1.jpeg" alt="Profession img" class="img">
                        <h3 class="profession__title">Software Developer</h3>
                    </a>
                </li>
                <li class="profession">
                    <a href="Lab1-profession_page.php">
                        <img src="./img/professions/prof1.jpeg" alt="Profession img" class="img">
                        <h3 class="profession__title">Game Programmer</h3>
                    </a>
                </li>
                <li class="profession">
                    <a href="Lab1-profession_page.php">
                        <img src="./img/professions/prof1.jpeg" alt="Profession img" class="img">
                        <h3 class="profession__title">Web Developer</h3>
                    </a>
                </li>
            </ul>
        </div>
    </main>

    <script src="./js/app.js"></script>
    <script src="./js/Lab1-home.js"></script>
    <script src="./js/menu.js"></script>
</body>
</html>

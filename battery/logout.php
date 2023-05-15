<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="http://localhost:8888/css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
    <?php
    include "menu.php";
    ?>

    <header class="header">
            <div class="header__text">
                <strong>Хотите выйти из аккаунта?</strong><br>
                <a href="http://localhost:8888/backend/logout.php" class="btn">Да</a> <a href="http://localhost:8888/index.php" class="btn">Нет</a>
            </div>
    </header>

    <script src="http://localhost:8888/js/app.js"></script>
</body>
</html>
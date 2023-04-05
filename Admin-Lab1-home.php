<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <link rel="stylesheet" href="http://localhost/css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
    <?php
    session_start();
    if($_SESSION["type"]!=3)
        {
            $_SESSION['error'] = "[RIGHTS] У вас недостаточно прав для просмотра этой страницы!";
    header('Location: '. 'http://localhost/error.php');
    exit();
        }
    ?>
    
<?php
    include "Admin-menu.php";
?>

    <header class="header">
        <div class="header__wrapper">
            <h1 class="header__title">
                MONITORING
            </h1>
        </div>
    </header>

    <main class="section">
        <div class="container">
            <ul class="professions" id="professions">
                <li class="profession">
                    <a href="http://localhost/admin-prof-page.html">
                        <img src="http://localhost/img/professions/prof1.png" alt="Profession img" class="profession__img">
                        <h3 class="profession__title">Software Developer</h3>
                    </a>
                </li>
                <li class="profession">
                    <a href="http://localhost/admin-prof-page.html">
                        <img src="http://localhost/img/professions/prof1.png" alt="Profession img" class="profession__img">
                        <h3 class="profession__title">Game Programmer</h3>
                    </a>
                </li>
                <li class="profession">
                    <a href="http://localhost/admin-prof-page.html">
                        <img src="http://localhost/img/professions/prof1.png" alt="Profession img" class="profession__img">
                        <h3 class="profession__title">Web Developer</h3>
                    </a>
                </li>
            </ul>
        </div>
    </main>

    <script src="http://localhost/js/Admin-Lab1-home.js"></script>
    <script src="./js/menu.js"></script>
</body>
</html>
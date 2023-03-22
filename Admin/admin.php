<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <link rel="stylesheet" href="http://172.28.22.160:8888/css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
    <?php
    session_start();
    if($_SESSION["type"]!=3)
        {
            $_SESSION['error'] = "[RIGHTS] У вас недостаточно прав для просмотра этой страницы!";
    header('Location: '. 'http://172.28.22.160:8888/error.php');
    exit();
        }
    ?>
    <nav class="nav">
        <div class="container">
            <div class="nav-row">
                <a href="http://172.28.22.160:8888/index.php" class="logo"><strong>ИТМО</strong> university</a>

                <ul class="nav-list">
                    <li class="nav-list__item"><a href="http://172.28.22.160:8888/addprof.php" class="nav-list__link">AddProf</a></li>
                    <li class="nav-list__item"><a href="http://172.28.22.160:8888/admin.php" class="nav-list__link nav-list__link--active">Admin</a></li>
                    <a href="http://172.28.22.160:8888/" class="btn">Exit</a>
                </ul>
            </div>
        </div>
    </nav>

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
                    <a href="http://172.28.22.160:8888/admin-prof-page.html">
                        <img src="http://172.28.22.160:8888/img/professions/prof1.png" alt="Profession img" class="profession__img">
                        <h3 class="profession__title">Software Developer</h3>
                    </a>
                </li>
                <li class="profession">
                    <a href="http://172.28.22.160:8888/admin-prof-page.html">
                        <img src="http://172.28.22.160:8888/img/professions/prof1.png" alt="Profession img" class="profession__img">
                        <h3 class="profession__title">Game Programmer</h3>
                    </a>
                </li>
                <li class="profession">
                    <a href="http://172.28.22.160:8888/admin-prof-page.html">
                        <img src="http://172.28.22.160:8888/img/professions/prof1.png" alt="Profession img" class="profession__img">
                        <h3 class="profession__title">Web Developer</h3>
                    </a>
                </li>
            </ul>
        </div>
    </main>

    <script src="http://172.28.22.160:8888/js/admin.js"></script>

</body>
</html>
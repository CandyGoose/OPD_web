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
    <nav class="nav">
        <div class="container">
            <div class="nav-row">
                <a href="./index.html" class="logo"><strong>ИТМО</strong> university</a>

                <ul class="nav-list">
                    <li class="nav-list__item"><a href="./index.html" class="nav-list__link nav-list__link--active">Home</a></li>
                    <li class="nav-list__item"><a href="./expert.php" class="nav-list__link">Expert</a></li>
                    <li class="nav-list__item" id="account"><i class="fa fa-user"></i><a href="./login.html" class="nav-list__link"> Login </a><a href="./register.html" class="nav-list__link">| Register</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="section">
        <div class="container">
            <h2 class="title-1">Professions</h2>
            <ul class="professions" id="professions">
                <li class="profession">
                    <a href="./profession-page.html">
                        <img src="./img/professions/prof1.jpeg" alt="Profession img" class="profession__img">
                        <h3 class="profession__title">Software Developer</h3>
                    </a>
                </li>
                <li class="profession">
                    <a href="./profession-page.html">
                        <img src="./img/professions/prof1.jpeg" alt="Profession img" class="profession__img">
                        <h3 class="profession__title">Game Programmer</h3>
                    </a>
                </li>
                <li class="profession">
                    <a href="./profession-page.html">
                        <img src="./img/professions/prof1.jpeg" alt="Profession img" class="profession__img">
                        <h3 class="profession__title">Web Developer</h3>
                    </a>
                </li>
                <li class="profession">
                    <img src="./img/professions/prof1.jpeg" alt="Profession img" class="profession__img">
                    <h3 class="profession__title">clown</h3>
                </li>
                <li class="profession">
                    <img src="./img/professions/prof1.jpeg" alt="Profession img" class="profession__img">
                    <h3 class="profession__title">clown</h3>
                </li>
                <li class="profession">
                    <img src="./img/professions/prof1.jpeg" alt="Profession img" class="profession__img">
                    <h3 class="profession__title">clown</h3>
                </li>

            </ul>
        </div>
    </main>

    <script src="./js/app.js"></script>
    <script src="./js/home.js"></script>
</body>
</html>

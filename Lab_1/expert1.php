<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expert</title>
    <link rel="stylesheet" href="http://172.28.22.160:8888/../css/main.css">
    <link rel='stylesheet' href="http://172.28.22.160:8888/resources/font-awesome.min.css">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"> -->
</head>
<body>
    <?php 
    session_start();
    if(!isset($_SESSION['login'])){
        $_SESSION['error'] = "[RIGHTS] Вам запрещен доступ на эту страницу!";
        header('Location: '. 'http://172.28.22.160:8888/error.php');
        exit();
    }
    ?>
<nav role="navigation" class="nav">
        <div class="container">
            <div class="nav-row">
                <a class="logo"><strong>ИТМО</strong> university</a>
                <ul class="nav-list">
                    <li class="nav-list__item dropdown">
                        <a href="#" class="nav-list__link nav-list__link--active"><span>Lab_4</span></a>
                        <nav class="submenu">
                            <ul class="submenu-items">
                                <li class="submenu-item"><a href="#" class="submenu-link">Home</a></li>
                                <li class="submenu-item"><a href="#" class="submenu-link">Expert</a></li>
                            </ul>
                        </nav>
                    </li> 
                    <li class="nav-list__item dropdown">
                        <a href="#" class="nav-list__link nav-list__link--active"><span>Lab_3</span></a>
                        <nav class="submenu">
                            <ul class="submenu-items">
                                <li class="submenu-item"><a href="#" class="submenu-link">Home</a></li>
                                <li class="submenu-item"><a href="#" class="submenu-link">Expert</a></li>
                            </ul>
                        </nav>
                    </li> 
                    <li class="nav-list__item dropdown">
                        <a href="#" class="nav-list__link nav-list__link--active"><span>Lab_2</span></a>
                        <nav class="submenu">
                            <ul class="submenu-items">
                            <li class="submenu-item"><a href="../home2.html" class="submenu-link">Home</a></li>
                                <li class="submenu-item"><a href="../expert2.html" class="submenu-link">Expert</a></li>
                            </ul>
                        </nav>
                    </li> 
                    <li class="nav-list__item dropdown">
                        <a href="#" class="nav-list__link nav-list__link--active"><span>Lab_1</span></a>
                        <nav class="submenu">
                            <ul class="submenu-items">
                                <li class="submenu-item"><a href="../home1.php" class="submenu-link">Home</a></li>
                                <li class="submenu-item"><a href="../expert1.php" class="submenu-link">Expert</a></li>
                            </ul>
                        </nav>
                    </li> 
                    <li class="nav-list__item dropdown">
                        <a href="#" class="nav-list__link"><span>More</span></a>
                        <nav class="submenu">
                            <ul class="submenu-items">
                                <li class="submenu-item"><a href="#" class="submenu-link">About us</a></li>
                                <li class="submenu-item"><a href="#" class="submenu-link">Exit</a></li>
                                <li class="submenu-item"><hr class="submenu-seperator" /></li>
                                <li class="submenu-item"><a href="#" class="submenu-link">Contact</a></li>
                            </ul>
                        </nav>
                    </li>  
                    <li class="nav-list__item" id="account">
                        <i class="fa fa-user"></i>
                        <a href="../login.html" class="nav-list__link">Login</a>
                        |
                        <a href="../register.html" class="nav-list__link">Register</a>
                    </li>
                </ul>
            </div>    
        </div>    
    </nav>
    <main class="section">
        <div class="container">
            <h2 class="title-1">Выберите профессию для оценки!</h2>
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
    <!-- job_listing_area_end  dsddfdds-->
    <script src="../js/app.js"></script>
    <script src="../js/lab_1/expert_chose.js"></script>
    <script src=".../js/menu.js"></script>
</body>
</html>

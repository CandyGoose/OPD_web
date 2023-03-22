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
                <a href="./index.html" class="logo"><strong>ИТМО</strong> university</a>
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
                                <li class="submenu-item"><a href="#" class="submenu-link">Home</a></li>
                                <li class="submenu-item"><a href="#" class="submenu-link">Color Test</a></li>
                                <li class="submenu-item"><a href="#" class="submenu-link">Color Test</a></li>
                                <li class="submenu-item"><a href="#" class="submenu-link">Color Test</a></li>
                            </ul>
                        </nav>
                    </li> 
                    <li class="nav-list__item dropdown">
                        <a href="#" class="nav-list__link nav-list__link--active"><span>Lab_1</span></a>
                        <nav class="submenu">
                            <ul class="submenu-items">
                                <li class="submenu-item"><a href="#" class="submenu-link">Home</a></li>
                                <li class="submenu-item"><a href="#" class="submenu-link">Expert</a></li>
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
                        <a href="./login.html" class="nav-list__link">Login</a>
                        |
                        <a href="./register.html" class="nav-list__link">Register</a>
                    </li>
                </ul>
            </div>    
        </div>    
    </nav>

    <header class="header">
        <div class="header__wrapper">
            <h1 class="header__title">
                Skills
            </h1>
            <div class="header__text">
                Выберете 7 качеств для профессии  
            </div>
            <button class="submit btn btn-outline-success" disabled>Отправить</button>
        </div>
    </header>

    <!-- job_listing_area_start  -->
    <main class="section">

        <div class="container" id="internals">
            <h3 class="category__title">Категория 1</h3>
                <ul class="job_lists">
                    <li class="single_jobs">
                        <div class="jobs_left">
                            <div class="jobs_conetent">
                                <h4>Качество бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла</h4>
                            </div>
                        </div>
                        <div class="jobs_right">
                            <div class="apply_now">
                                <a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a>
                            </div>
                        </div>
                    </li>
                    <li class="single_jobs">
                        <div class="jobs_left">
                            <div class="jobs_conetent">
                                <h4>Качество</h4>
                            </div>
                        </div>
                        <div class="jobs_right">
                            <div class="apply_now">
                                <a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a>
                            </div>
                        </div>
                    </li>
                    <li class="single_jobs"><div class="jobs_left"><div class="jobs_conetent"><h4>Качество</h4></div></div><div class="jobs_right"><div class="apply_now"><a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a></div></div></li>
                    <li class="single_jobs">
                        <div class="jobs_left">
                            <div class="jobs_conetent">
                                <h4>Качество</h4>
                            </div>
                        </div>
                        <div class="jobs_right">
                            <div class="apply_now">
                                <a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a>
                            </div>
                        </div>
                    </li>
                </ul>
            <h3 class="category__title">Категория 2</h3>
                <ul class="job_lists">
                    <li class="single_jobs">
                        <div class="jobs_left">
                            <div class="jobs_conetent">
                                <h4>Качество</h4>
                            </div>
                        </div>
                        <div class="jobs_right">
                            <div class="apply_now">
                                <a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a>
                            </div>
                        </div>
                    </li>
                    <li class="single_jobs">
                        <div class="jobs_left">
                            <div class="jobs_conetent">
                                <h4>Качество</h4></a>
                            </div>
                        </div>
                        <div class="jobs_right">
                            <div class="apply_now">
                                <a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
    </main>
    <!-- job_listing_area_end  dsddfdds-->
    <script src="http://172.28.22.160:8888/../js/app.js"></script>
    <script src="http://172.28.22.160:8888/../js/lab_1/expert.js"></script>
    <script src="http://172.28.22.160:8888/../js/lab_1/expertcheckbox.js"></script>
    <script src="../js/menu.js"></script>
</body>
</html>

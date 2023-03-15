<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <link rel="stylesheet" href="./css/main.css">
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
                    <li class="nav-list__item"><a href="http://172.28.22.160:8888/addprof.php" class="nav-list__link nav-list__link--active">AddProf</a></li>
                    <li class="nav-list__item"><a href="http://172.28.22.160:8888/admin.php" class="nav-list__link">Admin</a></li>
                    <a href="http://172.28.22.160:8888/" class="btn">Exit</a>
                </ul>
            </div>
        </div>
    </nav>

    <header class="header">
        <div class="header__wrapper">
            <h1 class="header__title">
                ADD PROFESSION
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
                <h3>Добавить профессию</h3>
                <br>
                <form action="http://172.28.22.160:8888/backend/insert_prof.php" id="add" method=post>
                    <input type="text" name="name" placeholder="Название" style="background-color: white;"><br> 
                    <br>
                    <input placeholder="Описание" type="textarea" style="background-color: white;" name="description"><br>
                    <br>
                    <a href="javascript:;" onclick="document.getElementById('add').submit();" class="btn">Добавить</a>
                </form>
                </div>
            </ul>
        </div>
    </main>
</body>
</html>
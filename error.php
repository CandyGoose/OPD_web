<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="http://172.28.22.160:8888/css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
    <nav class="nav">
        <div class="container">
            <div class="nav-row">
                <a href="http://172.28.22.160:8888/index.php" class="logo"><strong>ИТМО</strong> university</a>

                <ul class="nav-list">
                    <li class="nav-list__item"><a href="http://172.28.22.160:8888/index.php" class="nav-list__link">Home</a></li>
                    <li class="nav-list__item"><a href="http://172.28.22.160:8888/expert.php" class="nav-list__link">Expert</a></li>
                    <li class="nav-list__item" id="account"><i class="fa fa-user"></i><a href="http://172.28.22.160:8888/login.html" class="nav-list__link"> Login </a><a href="http://172.28.22.160:8888/register.html" class="nav-list__link">| Register</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="header">
        <strong><?php
        session_start();
        if(isset($_SESSION['error'])){
            echo $_SESSION['error'];
        }else{
            echo "404 ERROR";
        }
        ?></strong>
    </header>

    <script src="http://172.28.22.160:8888/js/app.js"></script>
</body>
</html>

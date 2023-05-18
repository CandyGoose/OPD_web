<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>
    <link rel="stylesheet" href="http://localhost:8888/css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
<?php
    include "menu.php";
?>

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

    <script src="http://localhost:8888/js/app.js"></script>
    <script src="./js/menu.js"></script>
</body>
</html>

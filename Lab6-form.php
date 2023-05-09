<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>

<?php
    include "menu.php";
?>

    <header class="header">
        <div class="header__wrapper">
            <h1 class="header__title" style="color: #000; border-bottom: 1px solid #000000;">
                RESULT
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
                <h3>Результат</h3>
                <select id="test-name" name="name">
                    <option value="Color">Reaction To Light</option>
                    <option value="Sound">Simple Sound</option>
                    <option value="Sound">Color Test</option>
                    <option value="Sound">Hard Sound</option>
                    <option value="Sound">Visual Test</option>
                    <option value="Sound">Simple Circle</option>
                    <option value="Sound">Hard Circle</option>
                    <option value="Sound">Chase</option>
                    <option value="Sound">Tracking</option>
                    <option value="Sound">Attention</option>
                    <option value="Sound">Memory</option>
                    <option value="Sound">Thinking</option>
                </select><br> 
                <br>
                <form action="" id="add" method=post>
                    <input placeholder="Пульс уд/мин" type="textarea" style="background-color: white;" name="puls"><br>
                    <br>
                    <a href="" class="btn">Добавить</a>
                </form>
                </div>
            </ul>
        </div>
    </main>

    <script src="./js/menu.js"></script>

</body>

</html>
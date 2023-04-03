<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profession page</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
<?php
    include "../menu.php";
?>

    <main class="section">
        <div class="container">
            <div class="profession-details">

                <h1 class="title-1" id="name_prof">Software Developer</h1>

                <img src="http://localhost/img/professions/prof1.jpeg" alt="" class="profession-details__cover">

                <div id="desc">
                    1
                </div><br>

                <div class="profession-details__desc" id="internals">
                    <h1>Распределение ПВК по важности</h1>
                    <p>Перетащите каждое название ПВК на соответствующее место по важности:</p>
                    <ol>
                        <li draggable="true">Название 1</li>
                        <li draggable="true">Название 2</li>
                        <li draggable="true">Название 3</li>
                        <li draggable="true">Название 4</li>
                        <li draggable="true">Название 5</li>
                        <li draggable="true">Название 6</li>
                        <li draggable="true">Название 7</li>
                    </ol>
                </div>
                <button class="submit btn btn-outline-success" style="color: #fff;background: linear-gradient(135deg, #71b7e6, #9b59b6);" disabled>Save</button>
            </div>
        </div>
    </main>

    <script src="http://localhost/../js/app.js"></script>
    <script src="http://localhost/../js/lab_1/profession-page.js"></script>
    <script src="../js/lab_1/profession-category.js"></script>
    <script src="../js/menu.js"></script>
</body>
</html>
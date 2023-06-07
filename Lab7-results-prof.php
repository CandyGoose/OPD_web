<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Results</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/pvk.css">
    <link rel="stylesheet" href="./css/card_table.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
<?php
    include "menu.php";
?>

<main class="section">
        <div class="container">
            <!-- <h2 class="title-1">Respondent tests</h2> -->
            <h2 class="title-2" style="text-align: center; padding: 10px;">Ваши ПВК по результатам тестов:</h2>
                <ol class="pvk-details" id="details">
                    <li draggable="true"><div class="pvk">Название 1</div></li>
                    <li draggable="true">Название 2</li>
                    <li draggable="true">Название 3</li>
                    <li draggable="true">Название 4</li>
                    <li draggable="true">Название 5</li>
                    <li draggable="true">Название 6</li>
                    <li draggable="true">Название 7</li>
                </ol>

            <h2 class="title-2" style="text-align: center; padding: 10px;">Профессии по вашим ПВК от наиболее подходящих к наименее:</h2>
            <ul class="professions" id="professions">

                <li class="profession"><div class="card"><h1>Название профессии</h1></div></li>

                <li class="profession">
                    <div class="card">
                    <h1>Название профессии</h1>
                    
                    </div>
                </li>
            </ul>
        </div>
    </main>
    <!-- <script src="./js/Lab7-pvk.js"></script>
    <script src="./js/Lab7-prof.js"></script> -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./js/app.js"></script>
    <script src="./js/menu.js"></script>
    <script src="./js/admin-tests.js"></script>
    <script src="./js/admin-get-name.js"></script>
    <script src="./js/admin-pvk2.js"></script>
    <script src="./js/admin-profpvk2.js"></script>
</body>
</html>
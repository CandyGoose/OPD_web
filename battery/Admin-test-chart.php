<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chart</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
<?php
    include "Admin-menu.php";
?>
    <div class="section">
        <div class="container">
            <h2 class="title-1">М</h2>
            <div class="chartCard">
            <div class="chartBox">
                <canvas id="myChart1"></canvas>
            </div>
        </div>
        </div>
    </div>

    <div class="section">
        <div class="container">
            <h2 class="title-1">Ж</h2>
            <div class="chartCard">
            <div class="chartBox">
                <canvas id="myChart2"></canvas>
            </div>
        </div>
        </div>
    </div>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js"></script>
    <script src="./js/Admin-chartM.js"></script>
    <!-- <script src="./js/Admin-chartF.js"></script> -->
    <script src="./js/menu.js"></script>
</body>
</html>
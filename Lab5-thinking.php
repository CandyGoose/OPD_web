<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thinking</title>
    <link href='https://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="./css/thinking.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>

<body>
<?php
    include "menu.php";
?>
    
    <h1>Thinking</h1>
	<form id="form" class="form hidden">
			<p style="text-align: center">Выберите недостающую часть:</p>
			<img id="raven_img" alt="Shape">
			<div class="ans hidden image-container"></div>
	</form>
	<div id="result" class="result hidden"></div>
	<p style="color: #000000; text-align: center">Осталось примеров: <span id="tries">15</span></p>
	<button type="button" class="start-button">Старт</button>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./js/Lab5-thinking.js"></script>
    <script src="./js/menu.js"></script>
</body>

</html>
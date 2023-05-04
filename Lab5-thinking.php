<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory</title>
    <link href='https://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="./css/thinking.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>

<body>
<?php
    include "menu.php";
?>
    
    <h1>Raven Test</h1>
	<form id="form" class="form hidden">
		<fieldset>
			<legend>Вопрос №1</legend>
			<p>Выберите недостающую часть:</p>
			<img id="raven_img1" alt="Shape1">
			<label><input type="radio" name="q1" value="a">1</label>
			<label><input type="radio" name="q1" value="b">2</label>
			<label><input type="radio" name="q1" value="c">3</label>
			<label><input type="radio" name="q1" value="d">4</label>
			<label><input type="radio" name="q1" value="e">5</label>
			<label><input type="radio" name="q1" value="f">6</label>
		</fieldset>
		<fieldset>
			<legend>Вопрос №2</legend>
			<p>Выберите недостающую часть:</p>
			<img id="raven_img2" alt="Shape2">
			<label><input type="radio" name="q2" value="a">1</label>
			<label><input type="radio" name="q2" value="b">2</label>
			<label><input type="radio" name="q2" value="c">3</label>
			<label><input type="radio" name="q2" value="d">4</label>
			<label><input type="radio" name="q2" value="e">5</label>
			<label><input type="radio" name="q2" value="f">6</label>
		</fieldset>
		<fieldset>
			<legend>Вопрос №3</legend>
			<p>Выберите недостающую часть:</p>
			<img id="raven_img3" alt="Shape3">
			<label><input type="radio" name="q3" value="a">1</label>
			<label><input type="radio" name="q3" value="b">2</label>
			<label><input type="radio" name="q3" value="c">3</label>
			<label><input type="radio" name="q3" value="d">4</label>
			<label><input type="radio" name="q3" value="e">5</label>
			<label><input type="radio" name="q3" value="f">6</label>
		</fieldset>
		<fieldset>
			<legend>Вопрос №4</legend>
			<p>Выберите недостающую часть:</p>
			<img id="raven_img4" alt="Shape4">
			<label><input type="radio" name="q4" value="a">1</label>
			<label><input type="radio" name="q4" value="b">2</label>
			<label><input type="radio" name="q4" value="c">3</label>
			<label><input type="radio" name="q4" value="d">4</label>
			<label><input type="radio" name="q4" value="e">5</label>
			<label><input type="radio" name="q4" value="f">6</label>
		</fieldset>
		<fieldset>
			<legend>Вопрос №5</legend>
			<p>Выберите недостающую часть:</p>
			<img id="raven_img5" alt="Shape5">
			<label><input type="radio" name="q5" value="a">1</label>
			<label><input type="radio" name="q5" value="b">2</label>
			<label><input type="radio" name="q5" value="c">3</label>
			<label><input type="radio" name="q5" value="d">4</label>
			<label><input type="radio" name="q5" value="e">5</label>
			<label><input type="radio" name="q5" value="f">6</label>
		</fieldset>
		<button type="submit" class="submit hidden">Отправить</button>
	</form>
	<div id="result" class="result hidden"></div>
	<button type="button" class="start-button">Старт</button>
  
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./js/Lab5-thinking.js"></script>
    <script src="./js/menu.js"></script>
</body>

</html>
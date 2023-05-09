<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReactionToLight</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
    <style>
		<?php
			echo '.nav {';
			echo '	border-bottom: 1px solid #ffffff;';
			echo '	color: white;';
			echo '}';
			echo '.nav-row a {';
			echo '	color: white;';
			echo '}';
            echo '.nav-list__link, .nav-list__link:link, .nav-list__link:visited, .nav-list__link:active {';
            echo '	color: white;';
            echo '}';  
		?>
	</style>
</head>

<body style="background: #000;">
<?php
    include "menu.php";
?>

    <header class="header">
        <div class="header__wrapper">
            <h1 class="header__title">
                Reaction to Light
            </h1>
            <div class="header__text" style="color: #fff;">
                Оценка простых сенсомоторных реакций человека:
                <p class="information" style="font-style: italic; font-size: 20px;">на свет</p>
            </div>
        </div>
    </header> 

    <div class="section">
        <div class="container">
            <div class="score" style="background: #000000;">
                <div id="color-box"></div>
                <div class="section-0">
                    <button id="even-button" disabled>Catch (W)</button>
                </div>
                <div class="section-1">
                    <button id="start" type="button">Start Game (S)</button>
                    <p id="question"></p>
                    <p id="result" style="color: #ffffff;"></p>
                    <p id="time-taken" class="hidden"></p>
                </div>
                <div class="section-2" style="padding: 10px 0px 10px 0px;">
                    <p style="color: #ffffff;">Осталось примеров: <span id="tries">5</span></p>
                    
                </div>
            </div>    
        </div>    
    </div>
</body>

<script src="./js/Lab2-reaction-to-light.js"></script>
<script src="./js/menu.js"></script>

</html>
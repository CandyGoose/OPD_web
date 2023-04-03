<?php

session_start();

$_SESSION['error'] = "[EXPERT] Вы оценили все доступные профессии";
header('Location: '. 'http://localhost/error.php');
exit();
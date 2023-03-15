<?php

session_start();

$_SESSION['error'] = "[EXPERT] Вы оценили все доступные профессии";
header('Location: '. 'http://172.28.22.160:8888/error.php');
exit();
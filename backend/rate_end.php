<?php

include "config.php";

session_start();

if (!isset($_SESSION['id']) || !isset($_POST['prof_id']) || !isset($_POST['k0']) || !isset($_POST['k1']) || !isset($_POST['k2']) || !isset($_POST['k3']) || !isset($_POST['k4']) || !isset($_POST['k5']) || !isset($_POST['k6'])){
    $_SESSION['error'] = "[RATE] Что-то не так";
    header('Location: '. 'http://localhost:8888/error.php');
    exit();
}

$id = $_SESSION['id'];
$prof_id = $_POST['prof_id'];
$k0 = $_POST['k0'];
$k1 = $_POST['k1'];
$k2 = $_POST['k2'];
$k3 = $_POST['k3'];
$k4 = $_POST['k4'];
$k5 = $_POST['k5'];
$k6 = $_POST['k6'];

$query_insert = "INSERT INTO ratings_end (prof_id, user_id, k0, k1, k2, k3, k4, k5, k6) VALUES ($prof_id, $id, $k0, $k1, $k2, $k3, $k4, $k5, $k6);";
$conn->query($query_insert);

header('Location: '. 'http://localhost:8888/lab8-expert.php');
exit();
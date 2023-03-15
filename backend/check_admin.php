<?php

include "config.php";

session_start();

$id = $_SESSION['id'];

$query = "SELECT * FROM users WHERE id = '$id';";
$res = $conn->query($query);
$result = mysqli_fetch_assoc($res);
if($result["type"]!=3){
    $_SESSION['error'] = "[RIGHTS] У вас недостаточно прав";
    header('Location: '. 'http://172.28.22.160:8888/error.php');
    exit();
}
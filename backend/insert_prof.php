<?php

include "config.php";
include "check_admin.php";

session_start();

if (!isset($_POST['name']) || !isset($_POST['description'])){
    $_SESSION['error'] = "[ADDPROF] Что-то не так";
    header('Location: '. 'http://localhost:8888/error.php');
    exit();
}

$name = $_POST['name'];
$description = $_POST['description'];


$query_insert = "INSERT INTO professions (name, description) VALUES ('$name', '$description');";
$conn->query($query_insert);

header('Location: '. 'http://localhost:8888/admin.php');
exit();
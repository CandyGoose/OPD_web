<?php

include "config.php";

session_start();

$name = $_POST["name"];
$pass = md5($_POST["pass"]);


// echo $name;
// echo "<br>";
// echo $pass;
// echo "<br>";
$query = "SELECT * FROM users WHERE login = '$name' AND password = '$pass';";
// echo $query;
// echo "<br>";
$res = $conn->query($query);

if(!$res){
    echo '{"success": false}';
    $_SESSION['error'] = "[LOGIN] Что-то пошло не так, возможно вы ввели неправильный логин или пароль";
    header('Location: '. 'http://localhost:8888/error.php');
    exit();
}
$result = mysqli_fetch_assoc($res);

if($result["password"]==md5($_POST["pass"])){
    $_SESSION["login"]=$name;
    $_SESSION["id"]=$result["id"];
    $_SESSION["type"]=$result["type"];
    echo '{"success": true}';
    header('Location: '. 'http://localhost:8888/index.php');
    exit();
}else{
    echo '{"success": false}';
    $_SESSION['error'] = "[LOGIN] Что-то пошло не так, возможно вы ввели неправильный логин или пароль";
    header('Location: '. 'http://localhost:8888/error.php');
    exit();
}
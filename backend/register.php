<?php

include "config.php";

session_start();

$name = $_POST["name"];
$pass = md5($_POST["pass"]);
$register_code = $_POST['register_code'];

if($register_code != "VXVXVX"){
    $_SESSION['error'] = "[REGISTER] Неверный код регистрации";
    header('Location: '. 'http://172.28.22.160:8888/error.php');
    exit();
}

// if(count($_POST["pass"] < 4){
//     $_SESSION['error'] = "[REGISTER] Слишком короткий пароль!";
//     header('Location: '. 'http://172.28.22.160:8888/error.php');
//     exit();
// }


$query = "SELECT * FROM users WHERE login = '$name' AND password = '$pass';";
$res = $conn->query($query);
$result = mysqli_fetch_assoc($res);

// if(isset($result['password'])){
//     $_SESSION['error'] = "[REGISTER] Уже есть пользователь с таким ником";
//     header('Location: '. 'http://172.28.22.160:8888/error.php');
//     exit();
// }


$query_insert = "INSERT INTO users (login, password, type) VALUES ('$name', '$pass', 0);";
// echo $query_insert;
$conn->query($query_insert);
$_SESSION["login"]=$name;
$_SESSION["id"]=$result["id"];

$query = "SELECT * FROM users WHERE login = '$name' AND password = '$pass';";
$res = $conn->query($query);
$result = mysqli_fetch_assoc($res);


if($result["password"]==md5($_POST["pass"])){
    $_SESSION["login"]=$name;
    $_SESSION["id"]=$result["id"];
    $_SESSION["type"]=$result["type"];
    echo '{"success": true}';
    header('Location: '. 'http://172.28.22.160:8888/index.php');
    exit();
}else{
    echo '{"success": false}';
    $_SESSION['error'] = "[REGISTER] Что-то пошло не так, возможно вы ввели неправильный логин или пароль";
    header('Location: '. 'http://172.28.22.160:8888/error.php');
    exit();
}
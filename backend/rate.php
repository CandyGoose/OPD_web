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



// echo $query_insert;

// $name = $_POST["name"];
// $pass = md5($_POST["pass"]);
// $register_code = $_POST['register_code'];

// if($register_code != "VXVXVX"){
//     $_SESSION['error'] = "[REGISTER] Неверный код регистрации";
//     header('Location: '. 'http://localhost:8888/error.php');
//     exit();
// }

// // if(count($_POST["pass"] < 4){
// //     $_SESSION['error'] = "[REGISTER] Слишком короткий пароль!";
// //     header('Location: '. 'http://localhost:8888/error.php');
// //     exit();
// // }


// $query = "SELECT * FROM users WHERE login = '$name' AND password = '$pass';";
// $res = $conn->query($query);
// $result = mysqli_fetch_assoc($res);

// // if(isset($result['password'])){
// //     $_SESSION['error'] = "[REGISTER] Уже есть пользователь с таким ником";
// //     header('Location: '. 'http://localhost:8888/error.php');
// //     exit();
// // }
// // echo $query_insert;
$query_insert = "INSERT INTO ratings (prof_id, user_id, k0, k1, k2, k3, k4, k5, k6) VALUES ($prof_id, $id, $k0, $k1, $k2, $k3, $k4, $k5, $k6);";
$conn->query($query_insert);

header('Location: '. 'http://localhost:8888/expert.php');
exit();
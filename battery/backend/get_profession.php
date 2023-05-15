<?php

include "config.php";

session_start();
$query = "SELECT * FROM professions WHERE id = " .  $_GET['id'] . " AND id NOT IN (SELECT prof_id FROM ratings WHERE user_id = " . $_SESSION["id"] . ")";
// echo $query . "<br>";
$res = $conn->query($query);

if(!$res){
    $_SESSION['error'] = "[RATING] Вы уже оценили эту профессию!";
    echo '{"success": true}';
}

$object = [];


while ($row = mysqli_fetch_assoc($res)){
    $object[]=$row;
}

if(count($object)==0){
    echo '{"success": true}';
}else{
    echo json_encode($object[0]);
}
?>
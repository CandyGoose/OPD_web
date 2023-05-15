<?php

include "config.php";
$query = "SELECT fullname, telegram, age, sex FROM users WHERE type > 0;";
// echo $query . "<br>";
$res = $conn->query($query);

if(!$res){
    echo "False category!!! <br>";
}

$object = [];


while ($row = mysqli_fetch_assoc($res)){
    $object[]=$row;
}

if(count($object)==0){
    echo '{"success": false}';
}else{
    echo json_encode($object);
}
?>
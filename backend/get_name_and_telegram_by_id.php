<?php

include "config.php";

$id = $_GET['id'];

$query = "SELECT users.fullname, users.telegram FROM users WHERE users.id = $id";
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
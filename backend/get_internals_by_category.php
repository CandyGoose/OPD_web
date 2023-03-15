<?php

include "config.php";


$category = $_GET["category"];

$query = "SELECT * FROM internals WHERE category = $category";

$res = $conn->query($query);

if(!$res){
    echo "False category!!! <br>";
}else{

$object = [];


while ($row = mysqli_fetch_assoc($res)){
    $object[]=$row;
}

echo json_encode($object);
}
?>
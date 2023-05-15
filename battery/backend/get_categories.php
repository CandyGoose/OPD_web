<?php

include "config.php";


$query = "SELECT * FROM category";

$res = $conn->query($query);

if(!$res){
    echo "False category!!! <br>";
}

$object = [];


while ($row = mysqli_fetch_assoc($res)){
    $object[]=$row;
}

echo json_encode($object);

?>
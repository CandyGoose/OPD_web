<?php

include "config.php";


$id = $_GET["id"];

$query = "SELECT * FROM professions WHERE id = $id";

$res = $conn->query($query);

if(!$res){
    echo "False category!!! <br>";
}else{

$result = mysqli_fetch_assoc($res);

echo json_encode($result);
}
?>
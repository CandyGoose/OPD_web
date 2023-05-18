<?php

include "config.php";


$id = $_GET["id"];

$query = "SELECT * FROM internals WHERE id = $id;";
// echo $query . "\n";
$res = $conn->query($query);

if(!$res){
    echo "False category!!! <br>";
}
$result = mysqli_fetch_assoc($res);

echo json_encode($result);
?>
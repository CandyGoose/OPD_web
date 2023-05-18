<?php

include "config.php";

$user_id = $_GET["id"];
$test_id = $_GET["test_id"];


$query = "SELECT result_test.* FROM result_test WHERE result_test.test_id=$test_id AND result_test.user_id=$user_id;";
// echo $query . "\n";
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


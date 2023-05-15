<?php

include "config.php";


// $sex = $_GET["sex"];
$test = $_GET["test"];


$query = "SELECT result_test.*, users.age,users.fullname as name, users.sex FROM result_test LEFT JOIN users ON result_test.user_id=users.id WHERE test_id = $test;";
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


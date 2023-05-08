<?php

include "config.php";


$test_id = $_GET["id"];


$query = "SELECT result_test.* FROM result_test WHERE result_test.test_id=$test_id;";
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


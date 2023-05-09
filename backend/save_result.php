<?php

include "config.php";

session_start();

$id = $_SESSION['id'];
$test_id = $_POST['test_id'];
$result = $_POST['res'];
$correct = $_POST['correct'];
// echo($id);


// echo $id . " " . $test_id . " " . $result . "\n";


// if (empty($id) || empty($test_id) || empty($result)) {
//     // echo "hello";
//     throw new Exception("Invalid request");
//     exit();
// }


$query = "INSERT INTO result_test (user_id, test_id, result, correct) VALUES ($id, $test_id, '$result', '$correct');";

$res = $conn->query($query);

// if($conn->getError()){
//     throw new Exception("Invalid request");
//     exit();
// }

echo "Success";

$conn->close();
header('Location: '. 'http://localhost:8888/index.php');
exit();


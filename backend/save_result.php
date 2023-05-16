<?php

include "config.php";

session_start();

$id = $_SESSION['id'];
$test_id = $_POST['test_id'];
$result = $_POST['res'];
$correct = $_POST['correct'];
$pulse = $_POST['pulse'];

$query = "INSERT INTO result_test (user_id, test_id, result, correct, pulse) VALUES ($id, $test_id, '$result', '$correct', '$pulse');";

$res = $conn->query($query);

echo "Success";

$conn->close();
header('Location: '. 'http://localhost:8888/index.php');
exit();


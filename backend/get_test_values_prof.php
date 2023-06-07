<?php

include "config.php";


// Получение значения testId и userId из POST-параметров
$testId = $_POST['testId'];
$userId = $_POST['userId'];

// Подготовка и выполнение запроса к базе данных
$sql = "SELECT result AS average_result FROM result_test WHERE test_id = ? AND user_id = ? ORDER BY average_result DESC LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ii', $testId, $userId);

$stmt->execute();
$result = $stmt->get_result();

// Получение данных из результата запроса
$testValues = array();
while ($row = $result->fetch_assoc()) {
  $testValues[] = $row['average_result'];
}

// Закрытие соединения с базой данных
$stmt->close();
$conn->close();

// Формирование ответа в формате JSON
$response = array('testValues' => $testValues);
echo json_encode($response);
?>
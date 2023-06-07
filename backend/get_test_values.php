<?php

include "config.php";


// Получение значения testId из POST-параметров
$testId = $_POST['testId'];


// Подготовка и выполнение запроса к базе данных
$sql = "SELECT result AS average_result FROM result_test WHERE test_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $testId);
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

// Расчет средних значений и формирование нового массива
$averageValues = array();
foreach ($testValues as $testValue) {
  $array = json_decode($testValue);
  if (!empty($array)) {
    $average = array_sum($array) / count($array);
    $averageValues[] = $average;
  }
}

// Формирование ответа в формате JSON
$response = array('testValues' => $averageValues);
echo json_encode($response);
?>

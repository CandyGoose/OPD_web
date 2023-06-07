<?php

include "config.php";

// Получение значения testId из GET-параметров
$testId = $_GET['id'];

// Подготовка и выполнение запроса к базе данных
$sql = "SELECT result, test_id FROM result_test WHERE user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $testId);
$stmt->execute();
$result = $stmt->get_result();

// Создание массива для хранения тест валью и их сумм
$testValues = array();
$testSums = array();

// Получение данных из результата запроса
while ($row = $result->fetch_assoc()) {
  $testValue = $row['result'];
  $testId = $row['test_id'];

  if (!isset($testValues[$testId])) {
    $testValues[$testId] = array();
    $testSums[$testId] = 0;
  }

  $array = json_decode($testValue);
  if (!empty($array)) {
    $average = array_sum($array) / count($array);
    $testValues[$testId][] = $average;
    $testSums[$testId] += $average;
  }
}

// Закрытие соединения с базой данных
$stmt->close();
$conn->close();

// Формирование ответа в формате JSON
$response = array();

foreach ($testValues as $testId => $values) {
  $averageValue = $testSums[$testId] / count($values);
  $response[$testId] = array(
    'testValues' => $values,
    'averageTestValue' => $averageValue
  );
}

echo json_encode($response);
?>

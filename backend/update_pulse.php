<?php
    // Подключение к базе данных
    include "config.php";
    
    session_start();

    // Получение данных из формы
    $testId = $_POST['test_id'];
    $pulse = $_POST['puls'];
    $userId = $_SESSION['id'];

    // Проверка наличия записи для теста с id 13 и отсутствия предыдущих результатов
    $checkQuery13 = "SELECT COUNT(*) as count13 FROM result_test WHERE user_id = $userId AND test_id = 13";
    $checkResult13 = mysqli_query($conn, $checkQuery13);
    $checkRow13 = mysqli_fetch_assoc($checkResult13);
    $test13Count = $checkRow13['count13'];

    // Проверка наличия записи для теста с id 13 и отсутствия предыдущих результатов
    $checkQuery14 = "SELECT COUNT(*) as count14 FROM result_test WHERE user_id = $userId AND test_id = 14";
    $checkResult14 = mysqli_query($conn, $checkQuery14);
    $checkRow14 = mysqli_fetch_assoc($checkResult14);
    $test14Count = $checkRow14['count14'];

    if ($testId == 13 && $test13Count == 0) {
        // Создание пустого результата для теста с id 13
        $insertQuery13 = "INSERT INTO result_test (user_id, test_id, result, correct, pulse) VALUES ($userId, $testId, NULL, NULL, '$pulse')";
        mysqli_query($conn, $insertQuery13);
    } else if ($testId == 14 && $test14Count == 0) {
        // Создание пустого результата для теста с id 14
        $insertQuery14 = "INSERT INTO result_test (user_id, test_id, result, correct, pulse) VALUES ($userId, $testId, NULL, NULL, '$pulse')";
        mysqli_query($conn, $insertQuery14);
    } else {
        // Получение ID последней попытки данного теста текущего пользователя
        $query = "SELECT id FROM result_test WHERE user_id = $userId AND test_id = $testId ORDER BY id DESC LIMIT 1";
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($result);
        $lastAttemptId = $row['id'];

        // Обновление поля пульса у последней попытки
        $updateQuery = "UPDATE result_test SET pulse = '$pulse' WHERE id = $lastAttemptId";
        mysqli_query($conn, $updateQuery);
    }

    // Перенаправление обратно на страницу формы после обработки
    header("Location: ./../Lab6-form.php");
    exit();
?>

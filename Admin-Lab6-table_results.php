<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Results</title>
    <link rel="stylesheet" href="./css/table1.css">
    <link rel="stylesheet" href="./css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
<?php
    include "Admin-menu.php";
?>

    <main class="section">
        <div class="container">
            <div class="test__results">
                <table class="table" data-filter-control="true">
                <thead>
                    <tr>
                        <td data-field="data1" class="header_table" rowspan="2">User</td>
                        <th data-field="data4" class="header_table" colspan="1">Before_test 2 min</th>
                        <th data-field="data4" class="header_table" colspan="2">Reaction_to_light 5 min</th>
                        <th data-field="data3" class="header_table" colspan="2">Simple_sound 5 min</th>
                        <th data-field="data4" class="header_table" colspan="3">Color_test 7 min</th>
                        <th data-field="data3" class="header_table" colspan="3">Hard_sound 7 min</th>
                        <th data-field="data3" class="header_table" colspan="3">Visual 7 min</th>
                        <th data-field="data4" class="header_table" colspan="2">Simple_circle 15 min</th>
                        <th data-field="data3" class="header_table" colspan="2">Hard_circle 15 min</th>
                        <th data-field="data4" class="header_table" colspan="2">Chase 15 min</th>
                        <th data-field="data3" class="header_table" colspan="2">Tracking 15 min</th>
                        <th data-field="data4" class="header_table" colspan="3">Attention 7 min</th>
                        <th data-field="data3" class="header_table" colspan="3">Memory 15 min</th>
                        <th data-field="data4" class="header_table" colspan="3">Thinking 15 min</th>
                        <th data-field="data4" class="header_table" colspan="2">After_test 2 min</th>
                    </tr>

                    <tr>
                        <th>Пульс</th>
                        <th>Время</th>
                        <th>Пульс</th>
                        <th>Время</th>
                        <th>Пульс</th>
                        <th>Верность</th>
                        <th>Время</th>
                        <th>Пульс</th>
                        <th>Верность</th>
                        <th>Время</th>
                        <th>Пульс</th>
                        <th>Верность</th>
                        <th>Время</th>
                        <th>Пульс</th>
                        <th>Отклонение от центра</th>
                        <th>Пульс</th>
                        <th>Отклонение от центра</th>
                        <th>Пульс</th>
                        <th>Время</th>
                        <th>Пульс</th>
                        <th>Отклонение от шара</th>
                        <th>Пульс</th>
                        <th>Верность</th>
                        <th>Время</th>
                        <th>Пульс</th>
                        <th>Верность</th>
                        <th>Время</th>
                        <th>Пульс</th>
                        <th>Верность</th>
                        <th>Время</th>
                        <th>Пульс</th>
                        <th>Пульс</th>
                    </tr>
                </thead>
                <tbody id="rates">
                <?php
                    // Подключение к базе данных
                    include "./backend/config.php";

                    // Запрос на получение данных из базы данных
                    $query = "SELECT * FROM result_test WHERE user_id = 1 ORDER BY id";
                    $result = mysqli_query($conn, $query);

                    // Проверка наличия результатов
                    if (mysqli_num_rows($result) > 0) {
                        // Инициализация переменных для хранения значений результатов
                        $test13_pulse = "";
                        $test3_result = "";
                        $test3_pulse = "";
                        $test4_result = "";
                        $test4_pulse = "";
                        $test1_correct = "";
                        $test1_result = "";
                        $test1_pulse = "";
                        $test2_correct = "";
                        $test2_result = "";
                        $test2_pulse = "";
                        $test5_correct = "";
                        $test5_result = "";
                        $test5_pulse = "";
                        $test6_result = "";
                        $test6_pulse = "";
                        $test7_result = "";
                        $test7_pulse = "";
                        $test8_result = "";
                        $test8_pulse = "";
                        $test9_result = "";
                        $test9_pulse = "";
                        $test10_correct = "";
                        $test10_result = "";
                        $test10_pulse = "";
                        $test11_correct = "";
                        $test11_result = "";
                        $test11_pulse = "";
                        $test12_correct = "";
                        $test12_result = "";
                        $test12_pulse = "";
                        $test14_pulse = "";

                        // Цикл для получения значений результатов
                        while ($row = mysqli_fetch_assoc($result)) {
                            if ($row['test_id'] == 13) {
                                $test13_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 3) {
                                $test3_result = $row['result'];
                                $test3_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 4) {
                                $test4_result = $row['result'];
                                $test4_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 1) {
                                $test1_correct = $row['correct'];
                                $test1_result = $row['result'];
                                $test1_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 2) {
                                $test2_correct = $row['correct'];
                                $test2_result = $row['result'];
                                $test2_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 5) {
                                $test5_correct = $row['correct'];
                                $test5_result = $row['result'];
                                $test5_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 6) {
                                $test6_result = $row['result'];
                                $test6_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 7) {
                                $test7_result = $row['result'];
                                $test7_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 8) {
                                $test8_result = $row['result'];
                                $test8_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 9) {
                                $test9_result = $row['result'];
                                $test9_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 10) {
                                $test10_correct = $row['correct'];
                                $test10_result = $row['result'];
                                $test10_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 11) {
                                $test11_correct = $row['correct'];
                                $test11_result = $row['result'];
                                $test11_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 12) {
                                $test12_correct = $row['correct'];
                                $test12_result = $row['result'];
                                $test12_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 14) {
                                $test14_pulse = $row['pulse'];
                            }
                        }

                        // Вывод значений в таблицу
                        echo "<tr>";
                        echo "<td>" . "Vera" . "</td>";
                        echo "<td>" . $test13_pulse . "</td>";
                        echo "<td>" . $test3_result . "</td>";
                        echo "<td>" . $test3_pulse . "</td>";
                        echo "<td>" . $test4_result . "</td>";
                        echo "<td>" . $test4_pulse . "</td>";
                        echo "<td>" . $test1_correct . "</td>";
                        echo "<td>" . $test1_result . "</td>";
                        echo "<td>" . $test1_pulse . "</td>";
                        echo "<td>" . $test2_correct . "</td>";
                        echo "<td>" . $test2_result . "</td>";
                        echo "<td>" . $test2_pulse . "</td>";
                        echo "<td>" . $test5_correct . "</td>";
                        echo "<td>" . $test5_result . "</td>";
                        echo "<td>" . $test5_pulse . "</td>";
                        echo "<td>" . $test6_result . "</td>";
                        echo "<td>" . $test6_pulse . "</td>";
                        echo "<td>" . $test7_result . "</td>";
                        echo "<td>" . $test7_pulse . "</td>";
                        echo "<td>" . $test8_result . "</td>";
                        echo "<td>" . $test8_pulse . "</td>";
                        echo "<td>" . $test9_result . "</td>";
                        echo "<td>" . $test9_pulse . "</td>";
                        echo "<td>" . $test10_correct . "</td>";
                        echo "<td>" . $test10_result . "</td>";
                        echo "<td>" . $test10_pulse . "</td>";
                        echo "<td>" . $test11_correct . "</td>";
                        echo "<td>" . $test11_result . "</td>";
                        echo "<td>" . $test11_pulse . "</td>";
                        echo "<td>" . $test12_correct . "</td>";
                        echo "<td>" . $test12_result . "</td>";
                        echo "<td>" . $test12_pulse . "</td>";
                        echo "<td>" . $test14_pulse . "</td>";
                        echo "</tr>";
                    } else {
                        echo "Нет данных";
                    }


                    // Закрытие соединения с базой данных
                    mysqli_close($conn);
                ?>
                <?php
                    // Подключение к базе данных
                    include "./backend/config.php";

                    // Запрос на получение данных из базы данных
                    $query = "SELECT * FROM result_test WHERE user_id = 2 ORDER BY id";
                    $result = mysqli_query($conn, $query);

                    // Проверка наличия результатов
                    if (mysqli_num_rows($result) > 0) {
                        // Инициализация переменных для хранения значений результатов
                        $test13_pulse = "";
                        $test3_result = "";
                        $test3_pulse = "";
                        $test4_result = "";
                        $test4_pulse = "";
                        $test1_correct = "";
                        $test1_result = "";
                        $test1_pulse = "";
                        $test2_correct = "";
                        $test2_result = "";
                        $test2_pulse = "";
                        $test5_correct = "";
                        $test5_result = "";
                        $test5_pulse = "";
                        $test6_result = "";
                        $test6_pulse = "";
                        $test7_result = "";
                        $test7_pulse = "";
                        $test8_result = "";
                        $test8_pulse = "";
                        $test9_result = "";
                        $test9_pulse = "";
                        $test10_correct = "";
                        $test10_result = "";
                        $test10_pulse = "";
                        $test11_correct = "";
                        $test11_result = "";
                        $test11_pulse = "";
                        $test12_correct = "";
                        $test12_result = "";
                        $test12_pulse = "";
                        $test14_pulse = "";

                        // Цикл для получения значений результатов
                        while ($row = mysqli_fetch_assoc($result)) {
                            if ($row['test_id'] == 13) {
                                $test13_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 3) {
                                $test3_result = $row['result'];
                                $test3_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 4) {
                                $test4_result = $row['result'];
                                $test4_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 1) {
                                $test1_correct = $row['correct'];
                                $test1_result = $row['result'];
                                $test1_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 2) {
                                $test2_correct = $row['correct'];
                                $test2_result = $row['result'];
                                $test2_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 5) {
                                $test5_correct = $row['correct'];
                                $test5_result = $row['result'];
                                $test5_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 6) {
                                $test6_result = $row['result'];
                                $test6_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 7) {
                                $test7_result = $row['result'];
                                $test7_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 8) {
                                $test8_result = $row['result'];
                                $test8_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 9) {
                                $test9_result = $row['result'];
                                $test9_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 10) {
                                $test10_correct = $row['correct'];
                                $test10_result = $row['result'];
                                $test10_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 11) {
                                $test11_correct = $row['correct'];
                                $test11_result = $row['result'];
                                $test11_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 12) {
                                $test12_correct = $row['correct'];
                                $test12_result = $row['result'];
                                $test12_pulse = $row['pulse'];
                            }

                            if ($row['test_id'] == 14) {
                                $test14_pulse = $row['pulse'];
                            }
                        }

                        // Вывод значений в таблицу
                        echo "<tr>";
                        echo "<td>" . "Kate" . "</td>";
                        echo "<td>" . $test13_pulse . "</td>";
                        echo "<td>" . $test3_result . "</td>";
                        echo "<td>" . $test3_pulse . "</td>";
                        echo "<td>" . $test4_result . "</td>";
                        echo "<td>" . $test4_pulse . "</td>";
                        echo "<td>" . $test1_correct . "</td>";
                        echo "<td>" . $test1_result . "</td>";
                        echo "<td>" . $test1_pulse . "</td>";
                        echo "<td>" . $test2_correct . "</td>";
                        echo "<td>" . $test2_result . "</td>";
                        echo "<td>" . $test2_pulse . "</td>";
                        echo "<td>" . $test5_correct . "</td>";
                        echo "<td>" . $test5_result . "</td>";
                        echo "<td>" . $test5_pulse . "</td>";
                        echo "<td>" . $test6_result . "</td>";
                        echo "<td>" . $test6_pulse . "</td>";
                        echo "<td>" . $test7_result . "</td>";
                        echo "<td>" . $test7_pulse . "</td>";
                        echo "<td>" . $test8_result . "</td>";
                        echo "<td>" . $test8_pulse . "</td>";
                        echo "<td>" . $test9_result . "</td>";
                        echo "<td>" . $test9_pulse . "</td>";
                        echo "<td>" . $test10_correct . "</td>";
                        echo "<td>" . $test10_result . "</td>";
                        echo "<td>" . $test10_pulse . "</td>";
                        echo "<td>" . $test11_correct . "</td>";
                        echo "<td>" . $test11_result . "</td>";
                        echo "<td>" . $test11_pulse . "</td>";
                        echo "<td>" . $test12_correct . "</td>";
                        echo "<td>" . $test12_result . "</td>";
                        echo "<td>" . $test12_pulse . "</td>";
                        echo "<td>" . $test14_pulse . "</td>";
                        echo "</tr>";
                    } else {
                        echo "Нет данных";
                    }


                    // Закрытие соединения с базой данных
                    mysqli_close($conn);
                ?>
                </tbody>
                </table>
            </div>    
        </div>
    </main>

    <script src="./js/app.js"></script>
    <script src="./js/menu.js"></script>
</body>
</html>


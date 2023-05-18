<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
<?php
    include "menu.php";
?>

    <main class="section">
        <div class="container">
            <h2 class="title-1">Your Results</h2>
            <div class="section-0" style="padding: 10px;">
                <select>
                    <option hidden>Test</option>
                    <option>Simple Circle</option>
                    <option>Hard Circle</option>
                </select>
                <button class="submit btn btn-outline-success" style="color: #fff;background: linear-gradient(135deg, #71b7e6, #9b59b6);" disabled>Show diagram</button>
            </div>    
            <div class="test__results">
                <table class="table" data-filter-control="true">
                <thead>
                    <tr>
                        <th data-field="data1" class="header_table">Пользователь</th>
                        <th data-field="data4" class="header_table">№</th>
                        <th data-field="data3" class="header_table">Попытка 1</th>
                        <th data-field="data4" class="header_table">Результат</th>
                        <th data-field="data3" class="header_table">Попытка 2</th>
                        <th data-field="data4" class="header_table">Результат</th>
                        <th data-field="data3" class="header_table">Попытка 3</th>
                        <th data-field="data4" class="header_table">Результат</th>
                        <th data-field="data3" class="header_table">Попытка 4</th>
                        <th data-field="data4" class="header_table">Результат</th>
                        <th data-field="data3" class="header_table">Попытка 5</th>
                        <th data-field="data4" class="header_table">Результат</th>
                    </tr>
                </thead>
                <tbody id="rates">
                    <tr>
                        <td>Name</td>
                        <td>1</td>
                        <td>300 мс</td>
                        <td>Неверно</td>
                        <td>300 мс</td>
                        <td>Верно</td>
                        <td>300 мс</td>
                        <td>Верно</td>
                        <td>300 мс</td>
                        <td>Верно</td>
                        <td>300 мс</td>
                        <td>Верно</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>2</td>
                        <td>300 мс</td>
                        <td>Неверно</td>
                        <td>300 мс</td>
                        <td>Верно</td>
                        <td>300 мс</td>
                        <td>Верно</td>
                        <td>300 мс</td>
                        <td>Верно</td>
                        <td>300 мс</td>
                        <td>Верно</td>
                    </tr>
                </tbody>
                </table>
            </div>    
        </div>
    </main>

    <script src="./js/app.js"></script>
    <script src="./js/menu.js"></script>
</body>
</html>

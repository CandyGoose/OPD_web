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
                        <td data-field="data1" class="header_table" rowspan="2">Пользователь</td>
                        <th data-field="data4" class="header_table" colspan="2">Reaction_to_light</th>
                        <th data-field="data3" class="header_table" colspan="2">Simple_sound</th>
                        <th data-field="data4" class="header_table" colspan="3">Color_test</th>
                        <th data-field="data3" class="header_table" colspan="3">Hard_sound</th>
                        <th data-field="data3" class="header_table" colspan="3">Visual</th>
                        <th data-field="data4" class="header_table" colspan="2">Simple_circle</th>
                        <th data-field="data3" class="header_table" colspan="2">Hard_circle</th>
                        <th data-field="data4" class="header_table" colspan="2">Chase</th>
                        <th data-field="data3" class="header_table" colspan="2">Tracking</th>
                        <th data-field="data4" class="header_table" colspan="3">Attention</th>
                        <th data-field="data3" class="header_table" colspan="3">Memory</th>
                        <th data-field="data4" class="header_table" colspan="3">Thinking</th>
                    </tr>

                    <tr>
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
                    </tr>
                </thead>
                <tbody id="rates">
                    <tr>
                        <td>name</td>
                        <td>1</td>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                        <td>4</td>
                        <td>4</td>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                        <td>6</td>
                        <td>6</td>
                        <td>7</td>
                        <td>7</td>
                        <td>8</td>
                        <td>8</td>
                        <td>9</td>
                        <td>9</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>11</td>
                        <td>11</td>
                        <td>11</td>
                        <td>12</td>
                        <td>12</td>
                        <td>12</td>
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

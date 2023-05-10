<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TestResult</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/table2.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
<?php
    include "Admin-menu.php";
?>
    <main class="section">
        <div class="container">
            <h2 class="title-1" id="test_name">Результаты "</h2>
            <div class="section-0" style="padding: 10px;">
                <p style="text-align: center;"><a href=".php" id="linkt">Написать респонденту в телеграм</a></p> 
            </div>
            <div class="test__results">
                <table class="table" data-filter-control="true">
                <thead>
                    <tr>
                        <th data-field="data1" class="header_table">Результат респондента</th>
                        <th data-field="data2" class="header_table">Верность</th>
                    </tr>
                </thead>
                <tbody id="results">
                   <!-- <td>dfa </td> -->
                </tbody>
                </table>
            </div>    
        </div>
    </main>
    <script src="./js/lab2admin_test_results.js"></script>
    <script src="./js/lab2_test_get_name1.js"></script>
    <script src="./js/app.js"></script>
    <script src="./js/menu.js"></script>
    <script>
        async function get(){
            var $_GET = {},
            args = location.search.substr(1).split(/&/);
            for (var i=0; i<args.length; ++i) {
                var tmp = args[i].split(/=/);
                if (tmp[0] != "") {
                    $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
                }
            }
            const response = await fetch("./backend/get_name_and_telegram_by_id.php?id=" + $_GET['user_id']);
            const result = await response.json();

            document.getElementById("linkt").setAttribute("href","https://t.me/" + result[0]['telegram']);
        }
        get();
    </script>
</body>
</html>
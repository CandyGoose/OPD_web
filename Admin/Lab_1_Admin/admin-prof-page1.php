<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profession page</title>
    <link rel="stylesheet" href="http://localhost/css/main.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
<body>
    <?php
    session_start();
    if($_SESSION["type"]!=3)
        {
            $_SESSION['error'] = "[RIGHTS] У вас недостаточно прав для просмотра этой страницы!";
    header('Location: '. 'http://localhost/../Admin/error.php');
    exit();
        }
    ?>

<?php
    include "../Admin/menu.php";
?>

    <main class="section">
        <div class="container">
            <div class="profession-details">

                <h1 class="title-1" id="name_prof">Software Developer</h1>
            </div>

            <table class="table" data-filter-control="true">
            <thead>
                <tr>
                    <th data-field="data1" class="header_table">Пользователь</th>
                    <th data-field="data3" class="header_table">Качевство 1</th>
                    <th data-field="data4" class="header_table">Качевство 2</th>
                    <th data-field="data5" class="header_table">Качевство 3</th>
                    <th data-field="data6" class="header_table">Качевство 4</th>
                    <th data-field="data7" class="header_table">Качевство 5</th>
                    <th data-field="data8" class="header_table">Качевство 6</th>
                    <th data-field="data9" class="header_table">Качевство 7</th>
                </tr>
            </thead>
            <tbody id="rates">
                <tr>
                    <td>Name</td>
                    <td>кач1ааааааа</td>
                    <td>кач2</td>
                    <td>кач3</td>
                    <td>кач4</td>
                    <td>кач5</td>
                    <td>кач6</td>
                    <td>кач7</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>кач1ааааааа</td>
                    <td>кач2</td>
                    <td>кач3</td>
                    <td>кач4</td>
                    <td>кач5</td>
                    <td>кач6</td>
                    <td>кач7</td>
                </tr>
            </tbody>
        </table>
        </div>


    </main>

    <script src="http://localhost/js/admin-prof.js"></script>
    <script src="../js/menu.js"></script>
</body>
</html>
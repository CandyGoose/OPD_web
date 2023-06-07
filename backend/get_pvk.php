<?php
include "../db.sql";

$user_id = $_GET['user_id'];

// Получаем данные пользователя из таблицы users_profs
$query = "SELECT * FROM users_profs WHERE user_id = $user_id";
$result = mysqli_query($connection, $query);
$user_profs = mysqli_fetch_assoc($result);

// Получаем данные из таблицы internals и сравниваем их с данными пользователя
$query = "SELECT name FROM internals WHERE 
          hc = {$user_profs['hc']} AND 
          hs = {$user_profs['hs']} AND 
          sc = {$user_profs['sc']} AND 
          ss = {$user_profs['ss']} AND 
          visual = {$user_profs['visual']} AND 
          sci = {$user_profs['sci']} AND 
          hci = {$user_profs['hci']} AND 
          chase = {$user_profs['chase']} AND 
          track = {$user_profs['track']} AND 
          att = {$user_profs['att']} AND 
          mem = {$user_profs['mem']} AND 
          thi = {$user_profs['thi']}
          LIMIT 6";

$result = mysqli_query($connection, $query);
$matched_professions = array();
while ($row = mysqli_fetch_assoc($result)) {
    $matched_professions[] = $row['name'];
}

// Возвращаем данные в формате JSON
echo json_encode($matched_professions);

mysqli_close($connection);
?>

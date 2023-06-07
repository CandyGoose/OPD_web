<?php
include "config.php";


$user_id = $_GET['id'];

// Получаем данные пользователя из таблицы users_profs

// Получаем данные из таблицы internals и сравниваем их с данными пользователя
$query = "SELECT DISTINCT professions.id, professions.name, a.user_id FROM (SELECT users_profs.user_id, internals.id, internals.name, 
((users_profs.hc=internals.hc) + (users_profs.hs=internals.hs) + 
(users_profs.sc=internals.sc) + (users_profs.ss=internals.ss) + 
(users_profs.visual=internals.visual) + (users_profs.sci=internals.sci) + (users_profs.hci=internals.hci) + 
(users_profs.chase=internals.chase) + (users_profs.track=internals.track) + (users_profs.att=internals.att) + 
(users_profs.mem=internals.mem) + (users_profs.thi=internals.thi))  as comp FROM users_profs JOIN internals ON 1=1) a
JOIN (SELECT combined.prof_id, combined.k_value FROM (
    SELECT prof_id, k_value, COUNT(*) AS count_value
    FROM (
        SELECT prof_id, k0 AS k_value FROM ratings
        UNION ALL
        SELECT prof_id, k1 AS k_value FROM ratings
        UNION ALL
        SELECT prof_id, k2 AS k_value FROM ratings
        UNION ALL
        SELECT prof_id, k3 AS k_value FROM ratings
        UNION ALL
        SELECT prof_id, k4 AS k_value FROM ratings
        UNION ALL
        SELECT prof_id, k5 AS k_value FROM ratings
        UNION ALL
        SELECT prof_id, k6 AS k_value FROM ratings
    ) AS combined
    GROUP BY prof_id, k_value
) AS combined
INNER JOIN (
    SELECT prof_id, AVG(count_value) AS avg_count
    FROM (
        SELECT prof_id, COUNT(*) AS count_value
        FROM (
            SELECT prof_id, k0 AS k_value FROM ratings
            UNION ALL
            SELECT prof_id, k1 AS k_value FROM ratings
            UNION ALL
            SELECT prof_id, k2 AS k_value FROM ratings
            UNION ALL
            SELECT prof_id, k3 AS k_value FROM ratings
            UNION ALL
            SELECT prof_id, k4 AS k_value FROM ratings
            UNION ALL
            SELECT prof_id, k5 AS k_value FROM ratings
            UNION ALL
            SELECT prof_id, k6 AS k_value FROM ratings
        ) AS combined
        GROUP BY prof_id, k_value
    ) AS counts
    GROUP BY prof_id
) AS avg_counts
ON combined.prof_id = avg_counts.prof_id
WHERE combined.count_value > avg_counts.avg_count
ORDER BY combined.count_value DESC) b ON b.k_value = a.id
JOIN professions ON b.prof_id = professions.id
WHERE comp >= 6 and a.user_id=$user_id;";
$res = $conn->query($query);
// $res = mysqli_query($connection, $query);
// $matched_professions = array();
$object = [];


while ($row = mysqli_fetch_assoc($res)){
    $object[]=$row;
}



if(count($object)==0){
    echo '{"success": false}';
}else{
    echo json_encode($object);
}

mysqli_close($connection);
?>

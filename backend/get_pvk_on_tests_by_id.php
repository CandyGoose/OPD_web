<?php
include "config.php";

session_start();
$user_id = $_GET['id'];

// Получаем данные пользователя из таблицы users_profs

// Получаем данные с страницы get_test_values.php
$url = "http://localhost:8888/backend/get_test_values.php?id=" . $user_id;
$data = file_get_contents($url);
// echo $data;
// Парсим полученные данные в виде JSON
$values = json_decode($data, true);

// Создаем мапу с использованием данных из JSON
// echo $values;
$map = array();
foreach ($values as $key => $value) {
    $map[$key] = $value['averageTestValue'];
    // echo $key;
}

function relu($x) {
    if ($x > 10) {
        return 10;
    } else {
        return max(0, $x);
    }
}

// Получаем данные из таблицы internals и сравниваем их с данными пользователя
$query = "SELECT * FROM (SELECT users_profs.user_id, internals.id, internals.name,
internals.hc, internals.hs, 
internals.sc, internals.ss, 
internals.visual, internals.sci, internals.hci, 
internals.chase, internals.track, internals.att,
internals.mem, internals.thi,
((users_profs.hc=internals.hc) + (users_profs.hs=internals.hs) + 
(users_profs.sc=internals.sc) + (users_profs.ss=internals.ss) + 
(users_profs.visual=internals.visual) + (users_profs.sci=internals.sci) + (users_profs.hci=internals.hci) + 
(users_profs.chase=internals.chase) + (users_profs.track=internals.track) + (users_profs.att=internals.att) + 
(users_profs.mem=internals.mem) + (users_profs.thi=internals.thi))  as comp FROM users_profs JOIN internals ON 1=1 WHERE (internals.hc + internals.hs + internals.sc + internals.ss + internals.visual + internals.sci + internals.hci + internals.chase + internals.track + internals.att + internals.mem + internals.thi)>0) a WHERE comp >= 6 and user_id=$user_id LIMIT 20;";

$query2 = 
$res = $conn->query($query);
// $res = mysqli_query($connection, $query);
// $matched_professions = array();
$object = [];


while ($row = mysqli_fetch_assoc($res)){

    // echo $map['2'] . "\n";
    $row['score1']=relu(-0.03*floatval($map['1'])+21.35)*floatval($row['hc']);
    $row['score2']=relu(-0.01*floatval($map['2'])+15.85)*floatval($row['hs']);
    $row['score3']=relu(-0.02*floatval($map['3'])+15.58)*floatval($row['sc']);
    $row['score4']=relu(-0.01*floatval($map['4'])+12.78)*floatval($row['ss']);
    $row['score5']=relu(-0.001*floatval($map['5'])+11.64)*floatval($row['visual']);
    $row['score6']=relu(-0.93*floatval($map['6'])+8.10)*floatval($row['sci']);
    $row['score7']=relu(0.03*floatval($map['7'])+8.50)*floatval($row['hci']);
    $row['score8']=relu(-0.29*floatval($map['8'])+9.13)*floatval($row['chase']);
    $row['score9']=relu(-0.001*floatval($map['9'])+14.08)*floatval($row['track']);
    $row['score10']=relu(0.001*floatval($map['10'])+3.88)*floatval($row['att']);
    $row['score11']=relu(0.001*floatval($map['11'])+0.98)*floatval($row['mem']);
    $row['score12']=relu(-0.001*floatval($map['12'])+10.05)*floatval($row['thi']);
    $some_sum = floatval($row['hc']) + floatval($row['hs']) + floatval($row['sc']) + floatval($row['ss']) + floatval($row['visual']) + floatval($row['sci']) + floatval($row['hci']) + floatval($row['chase']) + floatval($row['track']) + floatval($row['att']) + floatval($row['mem']) + floatval($row['thi']);
    $row['scoresum']= $row['score1']+ $row['score2']+ $row['score3']+ $row['score4']+ $row['score5'] + $row['score6']+ $row['score7'] + $row['score8']+ $row['score9'] + $row['score10'] +$row['score11']+$row['score12'];
    $row['scoreforman']=round((($row['scoresum'])/(10*$some_sum))*100,0);
    $object[]=$row;
    // echo $row['scoreforman'] . "<br>";
}

if(count($object)==0){
    echo '{"success": false}';
}else{
    echo json_encode($object);
}

mysqli_close($connection);
?>

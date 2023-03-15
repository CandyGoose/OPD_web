<?php

include "config.php";


$prof_id = $_GET["id"];

$query = "SELECT ratings.*, users.login, internals_first.name AS first, internals_second.name AS second, internals_third.name AS third, internals_fourth.name AS fourth, internals_fiveth.name AS fiveth, internals_sixth.name AS sixth, internals_seventh.name AS seventh FROM ratings LEFT JOIN users ON users.id=ratings.user_id INNER JOIN internals as internals_first on ratings.k0 = internals_first.id INNER JOIN internals as internals_second on ratings.k1 = internals_second.id INNER JOIN internals as internals_third on ratings.k2 = internals_third.id INNER JOIN internals as internals_fourth on ratings.k3 = internals_fourth.id INNER JOIN internals as internals_fiveth on ratings.k4 = internals_fiveth.id INNER JOIN internals as internals_sixth on ratings.k5 = internals_sixth.id INNER JOIN internals as internals_seventh on ratings.k6 = internals_seventh.id WHERE prof_id = $prof_id;";
// echo $query . "\n";
$res = $conn->query($query);

if(!$res){
    echo "False category!!! <br>";
}else{

    $object = [];


    while ($row = mysqli_fetch_assoc($res)){
        $object[]=$row;
}

echo json_encode($object);
}
?>


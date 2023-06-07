<?php

$localhost="localhost:8889";
$username="root";
$pass="root";
$db="proratings";

$conn = mysqli_connect($localhost, $username, $pass, $db);

if(!$conn){
    echo("Connection failed!");
}

?>
<?php

$localhost="localhost";
$username="root";
$pass="root";
$db="proratings2";

$conn = mysqli_connect($localhost, $username, $pass, $db);

if(!$conn){
    echo("Connection failed!");
}

?>
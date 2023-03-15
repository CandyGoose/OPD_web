<?php

$localhost="localhost";
$username="root";
$pass="root";
$db="proratings";

$conn = mysqli_connect($localhost, $username, $pass, $db);

if(!$conn){
    echo("Connection failed!");
}

?>
<?php

session_start();


if(isset($_SESSION["login"])){
    echo '{"name": "' . $_SESSION["login"] . '", "success": true }';
}else{
    echo '{"name": "", "success": false }';
}
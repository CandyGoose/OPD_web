<?php

session_start();
session_destroy();

header('Location: '. 'http://172.28.22.160:8888/index.php');
exit();

?>
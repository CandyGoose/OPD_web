<?php

session_start();
session_destroy();

header('Location: '. 'http://localhost/index.php');
exit();

?>
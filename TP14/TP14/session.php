<?php
session_start();
//store session data
$_SESSION['username'] = "MAHALKITA";
$_SESSION['email'] = "mahalkita@gmail.com";
echo $_SESSION['username'];
echo "<br>";
echo $_SESSION['email'];
session_destroy();

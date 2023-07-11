<?php
 $conn = mysqli_connect("localhost", 'php', '1234', "pizza");
if (!$conn) {
    echo "Connection Erro" + mysqli_connect_error();
}

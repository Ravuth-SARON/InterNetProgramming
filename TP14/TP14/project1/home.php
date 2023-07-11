<?php
include("config/db.php");

$sql = "Select * from pizza_order";
$result = mysqli_query($conn, $sql);
$pizzas = mysqli_fetch_all($result, MYSQLI_ASSOC);

mysqli_free_result($result);
//close connection;
mysqli_close($conn);

//print_r($pizzas);


?>


<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>

    <?php include('./templates/header.php') ?>

    <div class="grid grid-cols-2 place-items-center  justify-center items-center gap-5 ">
        <?php foreach ($pizzas as $pizza) : ?>

            <div class="  w-fit border-2 border-slate-400 bg-slate-300 place-items-center p-10">
                <h1><?php echo htmlspecialchars($pizza['title']) ?></h1>

                <h1><?php echo htmlspecialchars($pizza['ingredient']) ?></h1>
            </div>

        <?php endforeach; ?>
    </div>

</body>

</html>
<?php
include('config/db.php');

$email = $name = $ingre = '';
$err = ['email' => '', "name" => '', "ingre" => ''];
if (isset($_POST['submit'])) {
    //email
    if (empty($_POST['email'])) {
        $err['email'] = "You need to enter data";
    } else {
        $email = htmlspecialchars($_POST['email']);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $err['email'] = "Invalid email";
        }
        // echo ($email);
    };

    //name
    if (empty($_POST['name'])) {
        $err['name'] = "You need to ennter data";
    } else {
        $name = htmlspecialchars($_POST['name']);
        if (!preg_match('/^[a-zA-Z\s]+$/', $name)) {
            $err['name'] =  "Invalid Name";
        }
    };

    //ingredient
    if (empty($_POST['ingre'])) {
        $err['ingre'] =  "at least 1 ingre exist";
    } else {
        $ingre = htmlspecialchars($_POST['ingre']);
        // echo $ingre;
    };
    if (array_filter($err)) {
    } else {
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $title = mysqli_real_escape_string($conn, $_POST['name']);
        $ingre = mysqli_real_escape_string($conn, $_POST['ingre']);

        //insert into table
        $sql = "Insert into pizza_order(email,title,ingredient) values('$email','$title','$ingre')";
        if (mysqli_query($conn, $sql)) {
        } else {
            echo mysqli_error($conn);
        }
        header("Location:home.php");
    }
}

?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Document</title>
</head>


<body>

    <?php include('./templates/header.php') ?>
    <div class="flex justify-center items-center  text-white bg-slate-900 py-5 h-fit  ">
        <div class=" flex justify-center items-center border-2 border-slate-600 w-[900px] h-fit py-3">
            <form action="template.php" class="grid gap-[40px] my-5" method="POST"> <!--Use file add.php to handle the request -->
                <h1 class="text-center">Add Pizza</h1>
                <div class="grid gap-3  ">
                    <label for="">Email</label>
                    <input type="text" name="email" value=" <?php echo $email ?>" class="border-b-2 border-slate-500 w-[600px] bg-slate-900 mt-4">
                    <div class="text-red-600"><?php echo $err['email'] ?></div>
                </div>
                <div class="grid gap-3  ">
                    <label for="">Name</label>
                    <input type="text" name="name" value=" <?php echo $name ?>" class="border-b-2 border-slate-500 w-[600px] bg-slate-900 mt-4">
                    <div class="text-red-600"><?php echo $err['name'] ?></div>
                </div>
                <div class="grid gap-3   ">
                    <label for="">Ingrdient</label>
                    <input type="text" name="ingre" value=" <?php echo $ingre ?>" class="border-b-2 border-slate-500 w-[600px] mt-4 bg-slate-900">
                    <div class="text-red-600"><?php echo $err['ingre'] ?></div>
                </div>
                <div class="flex gap-4  justify-center items-center mb-4  ">

                    <input type="submit" placeholder="Submit" name="submit" class="border-2 bg-red-500 rounded-md w-[300px] h-[50px]  border-slate-300">
                </div>


            </form>
        </div>

    </div>


    <?php include('./templates/footer.php') ?>
    </div>




</body>

</html>
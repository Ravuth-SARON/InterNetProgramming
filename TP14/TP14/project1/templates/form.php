<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>

    <div class="flex justify-center items-center mt-10 text-white ">
        <div class=" flex justify-center items-center border-2 border-slate-600 w-[900px] h-[500px]">
            <form action="template.php" class="grid gap-[40px]" method="POST"> <!--Use file add.php to handle the request -->
                <h1 class="text-center">Add Pizza</h1>

                <div class="grid gap-7  ">
                    <label for="">Email</label>
                    <input type="text" name="email" class="border-b-2 border-slate-500 w-[600px] bg-slate-900">
                </div>
                <div class="grid gap-7  ">
                    <label for="">Name</label>
                    <input type="text" name="name" class="border-b-2 border-slate-500 w-[600px] bg-slate-900">
                </div>
                <div class="grid gap-7   ">
                    <label for="">Ingrdient</label>
                    <input type="text" name="ingre" class="border-b-2 border-slate-500 w-[600px] bg-slate-900">
                </div>
                <div class="flex gap-4  justify-center items-center  ">

                    <input type="submit" placeholder="Submit" name="submit" class="border-2 bg-red-500 rounded-md w-[300px] h-[50px]  border-slate-300">
                </div>


            </form>
        </div>

    </div>



</body>

</html>
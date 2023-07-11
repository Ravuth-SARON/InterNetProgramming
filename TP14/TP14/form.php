<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <form action="registration.php" method="post" style="display:grid;gap:4em;justify-content:center;height:100vh;align-content:center;">
        <div>
            <label for="">Name</label>
            <input type="text" name="name" class="border-2 p-3 rounded-md">
        </div>
        <div>
            <label for="">Email</label>
            <input type="text" name="email" class="border-2 p-3 rounded-md">
        </div>
        <div>
            <input type="submit" value="submit" class="border-2 p-3 rounded-md text-center bg-blue-400">
        </div>
    </form>
</body>

</html>
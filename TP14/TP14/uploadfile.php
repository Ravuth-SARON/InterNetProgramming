<?php
if (isset($_POST["SubmitBtn"])) {


    $fileName = $_FILES["resume"]["name"];
    $fileSize = $_FILES["resume"]["size"] / 1024;
    $fileType =  $_FILES["resume"]["type"];
    $fileTmpName = $_FILES["resume"]["tmp_name"];
    if ($fileType == "application/msword") {
        if ($fileSize <= 200) {

            $random = rand(1111, 9999);
            $newFileName = $random . $fileName;
            //File upload path
            $uploadPath = "testUpload/" . $newFileName;
            //function for upload file
            if (move_uploaded_file($fileTmpName, $uploadPath)) {
                echo "Successful";
                echo "File Name :" . $newFileName;
                echo "File Size :" . $fileType;
                echo "File Type :" . $fileType;
            }
        } else {
            echo "Maximum upload file size limit is 200 kb";
        }
    } else {
        echo "You can only upload a Word doc file.";
    }
}
?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <form method="post" action="" enctype="multipart/form-data" name="form1" class="grid">
        <label for="">Input file here</label>
        <input type="file" name="resume" id="resume">
        <input type="submit" name="SubmitBtn" id="SubmitBtn" class="border-slate-300 bg-blue-400 border-2 p-3 w-[100px] ">
    </form>
</body>

</html>
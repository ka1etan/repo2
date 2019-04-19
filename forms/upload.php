<?php
$target_dir = "/";
$target_file = $target_dir . basename($_FILES['fupl']['name']);
$uploadOk = 1;

if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES['fupl']['tmp_name'], $target_file)) {
        echo "The file ". basename( $_FILES['fupl']['name']). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
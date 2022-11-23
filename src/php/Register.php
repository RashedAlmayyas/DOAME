<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Access-Control-Allow-Headers: content-type or other');
header('Content-Type: application/json');
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "doame";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
if(isset($_POST['id']))
{
    $sql = "INSERT INTO `user`( `id`, `email`, `name`, `pass`)
        VALUES ('".$_POST['id']."', '".$_POST['email']."','".$_POST['name']."', '".$_POST['pass']."')";
    if (mysqli_query($conn,$sql)) {
    $data = array("data" => "Your Data added successfully");
        echo json_encode($data);
    } else {
        $data = array("data" => "Error: " . $sql . "<br>" . $conn->error);
        echo json_encode($data);
        
    }
}
die();
?>
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
    $sql = mysqli_query($conn, "SELECT * from user");
    $rows = array();
    while($r = mysqli_fetch_assoc($sql)) {
        $rows[] = $r;
    }
    print json_encode($rows); 
?>
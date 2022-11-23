<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type , 
Access-Control-Allow-Headers , Authorization, X-Requested-with");

$data = json_decode(file_get_contents("php://input"));
$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"doame");

$id = $data->id;
$pass = $data->pass;

$result = mysqli_query($con,"SELECT * from user where id='".$id."' and pass='".$pass."'");

$nums = mysqli_num_rows($result);
$rs = mysqli_fetch_array($result);


if ($nums>=1){
    http_response_code(200);
    $out = " ";

    $out .='{"id":"' .$rs["id"].'",';
    $out .='"pass":"' .$rs["pass"].'",';
    $out .='"Status":"200"}';


    echo $out;
}
else{
    http_response_code(202);
}



?>
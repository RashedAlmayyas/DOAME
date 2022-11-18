<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type , 
Access-Control-Allow-Headers , Authorization, X-Requested-with");

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$name = $data->name;
$pass = $data->pass;


$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"doame");
if ($id && $name && $pass){
$sql = "insert into user(
    id,
    name,
    pass
    )
    values(
    '$id',
    '$name',
    '$pass'
)";
$result = mysqli_query($con,$sql);
if($result){

    $response['data']=array(
        'status'=>'valid'
    );
    echo json_encode( $response);
}
    else {
        $response['data']=array(
            'status'=>'invalid'
        );
        echo json_encode( $response);
    }
} 







?>
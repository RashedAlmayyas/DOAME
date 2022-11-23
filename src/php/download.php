<table border="1">
									<thead>
										<tr>
										<th>#</th>
											<th>id</th>
											<th>name</th>
											<th>time</th>

										</tr>
									</thead>
<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type , 
Access-Control-Allow-Headers , Authorization, X-Requested-with");

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
</table>
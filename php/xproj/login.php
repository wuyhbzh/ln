<?php
$username=$_REQUEST['name'];
$passwd=$_REQUEST['password'];
session_start();
$_SESSION['s_username']=$username;


$servername = "115.159.45.241";
$dbusername = "gamebzh";
$dbpassword = "2889372";
$dbname = "gamebzh";

// 创建连接
$conn = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);
// 检测连接
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}else{
    echo $username.$passwd."链接成功</br>";
}


$sql = "INSERT INTO user (name, pass) VALUES ('".$username."', '".$passwd."')";

if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

// return $conn
?>

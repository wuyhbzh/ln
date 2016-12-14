

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


$sql = "select * from user where name = '".$username."' and pass = '".$passwd."'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
   echo "登录成功";
} else {
    echo "登录失败";
}

mysqli_close($conn);

// return $conn
?>

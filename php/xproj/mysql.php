
<?php
$servername = "115.159.45.241";
$username = "gamebzh";
$password = "2889372";
$dbname = "gamebzh";

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检测连接
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}else{
    echo "链接成功";
}


$sql = "INSERT INTO user (name, pass) VALUES ('John', '123456')";

if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

// return $conn
?>

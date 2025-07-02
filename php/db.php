<?php
$host = 'localhost';
$db   = 'asphalt_alley';
$user = 'root';
$pass = ''; // 默认 root 用户无密码，按你实际设置修改

$conn = new mysqli($host, $user, $pass, $db);

// 检查连接
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

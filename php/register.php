<?php
include('db.php');

$username = $_POST['username'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// 检查是否已存在
$check = $conn->prepare("SELECT id FROM users WHERE username=? OR email=?");
$check->bind_param("ss", $username, $email);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo "exists";
    exit;
}

$stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $password);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "error";
}
?>

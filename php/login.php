<?php
include('db.php');

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT password FROM users WHERE username=?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($hashed_password);
    $stmt->fetch();
    if (password_verify($password, $hashed_password)) {
        echo "success";
    } else {
        echo "wrong_password";
    }
} else {
    echo "no_user";
}
?>

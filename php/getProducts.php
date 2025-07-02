<?php
include('db.php');

$categories = isset($_GET['categories']) ? explode(',', $_GET['categories']) : [];

if (count($categories) === 0) {
    echo json_encode([]);
    exit;
}

// 动态构造 WHERE 子句
$where = implode(' OR ', array_fill(0, count($categories), 'category=? OR subcategory=?'));
$sql = "SELECT * FROM products WHERE $where";

$stmt = $conn->prepare($sql);

$params = [];
foreach ($categories as $cat) {
    $params[] = $cat;
    $params[] = $cat;
}

$stmt->bind_param(str_repeat('s', count($params)), ...$params);
$stmt->execute();
$result = $stmt->get_result();

$products = [];
while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

echo json_encode($products);
?>

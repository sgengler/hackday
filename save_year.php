<?php
 
ini_set('memory_limit', '6400M');
ini_set('max_execution_time', 300);


$year = $_POST['year'];
$data = $_POST['data'];


$file = "data/" . $year . ".json";

echo $data;

file_put_contents($file, $data);

?>
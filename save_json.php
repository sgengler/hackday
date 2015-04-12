<?php
 
ini_set('memory_limit', '6400M');
ini_set('max_execution_time', 300);


$content = $_POST['content'];


$file = "data/yearlyData.json";


file_put_contents($file, $content);

?>
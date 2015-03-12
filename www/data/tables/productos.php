<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once("../functions.php");

$result=query("SELECT * FROM productos WHERE idProducto<=6");

$outp = "[";
if($result){
	while ($row = mysqli_fetch_array($result)) {
		if ($outp != "[") {$outp .= ",";}
			$outp .= '{"idProducto" : "' . $row["idProducto"] . '",';
			$outp .='"Pza" : "' . $row["Pza"] . '",';
			$outp .='"Nombre" : "' . $row["Nombre"] . '",';
			$outp .='"Precio" : "' . $row["Precio"] . '"}';
	}
	$outp .="]";

	echo $outp;
}
?>
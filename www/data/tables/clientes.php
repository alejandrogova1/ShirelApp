<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once("../functions.php");

$result=query("SELECT * FROM clientes WHERE Activo='S'");

$outp = "[";
if($result){
	while ($row = mysqli_fetch_array($result)) {
		if ($outp != "[") {$outp .= ",";}
			$outp .= '{"idCliente" : "' . $row["idCliente"] . '",';
			$outp .='"Nombre" : "' . $row["Nombre"] . '",';
	}
	$outp .="]";

	echo $outp;
}
?>
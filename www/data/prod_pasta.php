<?php
require_once("functions.php");

$data = json_decode(file_get_contents("php://input"));
$idProducto = $data->idProducto;
$NoCuadro = $data->NoCuadro;
$Kgs = $data->Kgs;
if(!isset($data->Observaciones)) $Observaciones=""; else $Observaciones = $data->Observaciones;
$FechaAlta = date("Y-m-d H:i:s");
$idUsuario = 3;

$result=query("INSERT INTO pasta (Fecha, NoCuadro, idProducto, Kgs, Observaciones, idUsuario) VALUES ('$FechaAlta', $NoCuadro, $idProducto, $Kgs, '$Observaciones', $idUsuario)");
if ($result) {
    $arr = array('msg' => "Registro guardado!", 'error' => '');
    $jsn = json_encode($arr);
    print_r($jsn);
} else {
    $arr = array('msg' => "", 'error' => 'Error In inserting record.');
    $jsn = json_encode($arr);
    print_r($jsn);
}
?>

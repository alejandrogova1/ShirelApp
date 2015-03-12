<?php
require_once("functions.php");

$data = json_decode(file_get_contents("php://input"));
$idProducto = $data->idProducto;
$BolsaRecibida = $data->BolsaRecibida;
$BolsasProducidas = $data->BolsasProducidas;
$DevBolsaBuena = $data->DevBolsaBuena;
$DevBolsaMala = $data->DevBolsaMala;
if(!isset($data->Observaciones)) $Observaciones=""; else $Observaciones = $data->Observaciones;
$FechaAlta = date("Y-m-d H:i:s");
$idUsuario = 3;

$result=query("INSERT INTO totopo (idTipoBolsa, BolsasProducidas, BolsaRecibida, DevBolsaBuena, DevBolsaDañada, Observaciones, FechaAlta, idUsuario) VALUES ($idProducto, $BolsasProducidas, $BolsaRecibida, $DevBolsaBuena, $DevBolsaMala, '$Observaciones', '$FechaAlta', $idUsuario);");
if ($result) {
    $arr = array('msg' => "Registro guardado!", 'error' => '');
    $jsn = json_encode($arr);
    print_r($jsn);
} else {
    $arr = array('msg' => "", 'error' => 'Error In inserting record');
    $jsn = json_encode($arr);
    print_r($jsn);
}
?>

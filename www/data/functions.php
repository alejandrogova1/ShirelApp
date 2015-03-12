<?php
//error_reporting(0);
date_default_timezone_set("America/Mexico_City");

if (!isset($link))
{
	$link = false;
}

// getMyConection()
function getMyConection() {
	global $link;
	
	$db_host = "localhost";
	$db_name = "tostadas";
	$db_user = "admin";
	$db_pass = "root";

	if ($link)
	{
		return $link;
	}
	else
	{
		$link = mysqli_connect($db_host, $db_user, $db_pass, $db_name) or die("No se pudo conectar a la base de datos...");
		return $link;
	}
}

// closeConection()
function closeConection()
{
	global $link;
	if($link != false)
	{
		mysqli_close($link);
	}
	else
	{
		$link = false;
	}
}

// Muestra la cantidad de registros($result)
function CantidadRegistros($result)
{
	return mysqli_num_rows($result);
}

// query($query)
function query($query)
{
	return mysqli_query(getMyConection(), $query);
}

function sql_special_chars($string)
{
	$string = str_replace("\'", "'", $string);
	$string = str_replace("'", "''", $string);
	$string = htmlspecialchars($string);
	return $string;
}

//obtiene la fecha de formato largo por ejemplo: Jueves, 17 de Mayo de 2012
function longDateFormat()
{
	setlocale(LC_TIME, 'es_MX');
	
	$day = strftime('%e', mktime(0,0,0,date("m"),date("d"),date("Y")));
	$weekday = strftime('%A', mktime(0,0,0,date("m"),date("d"),date("Y")));
	$monthname = strftime('%B', mktime(0,0,0,date("m"),date("d"),date("Y")));
	$year = strftime('%Y', mktime(0,0,0,date("m"),date("d"),date("Y")));
  
	$fecha = "<p>" . ucfirst($weekday) . ", " . $day . " de " . ucfirst($monthname) . " de " . $year . "</p>";
	
	return $fecha;
}
?>

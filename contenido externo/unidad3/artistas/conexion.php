<?php
$servidor = "localhost";  // Agregado localhost
$root = "root";
$pass = "";
$database = "personas";

function conectar($servidor, $root, $pass, $database) : mysqli { 
    $conexion = new mysqli($servidor, $root, $pass, $database);
    if ($conexion->connect_error) {
        die("Conexion fallida: " . $conexion->connect_error);
    } else {
        return $conexion;
    }
}

function verificar($usuario , $contraseña,$conexion) : mysqli {
    $query = "SELECT * FROM personas WHERE usuario='$usuario' AND password='$contraseña'";
    $resultado = mysqli_query($conexion, $query) or die("Error en la consulta: " . mysqli_error($conexion));
    return $resultado;
}

function desconectar($conexion) : void {
    mysqli_close($conexion);
} 
?>
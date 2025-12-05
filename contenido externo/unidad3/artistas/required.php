<?php
require("conexion.php");
$conexion = conectar();
$bandera =0;
$datos = mysqli_query($conexion, "SELECT * FROM personas");
desconectar($conexion);
while($fila = mysqli_fetch_assoc($datos)) {
    if($fila["usuario"]==$_POST["usuario"] && $fila["password"]==$_POST["password"]) {
        echo "Bienvenido " . $fila["usuario"];
        $bandera++;
    }
}
if($bandera==0){
    echo "Usuario o contraseña incorrecta";
    echo "llevando a la pagina de registro";
    header("refresh:3; url=register.php");
}   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Bienvenido a la pagina de libros publicados<br>
    <?php
    if(null !== $_GET["titulo"]){
        $titulo=$_GET["titulo"];
        $autor=$_GET["autor"];
        $editorial=$_GET["editorial"];
        $pagina=$_GET["pagina"];
        echo"titulos: ".$titulo."\n autor: ".$autor."\n editorial: ".$editorial."\n pagina: ".$pagina;
    } else {
        $titulo="No hay titulo";
        $autor="No hay autor";
        $editorial="No hay editorial";
        $pagina="No hay pagina";
    }
   ?>
</body>
</html>
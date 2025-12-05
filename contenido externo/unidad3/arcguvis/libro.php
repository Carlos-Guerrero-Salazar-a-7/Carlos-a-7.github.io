<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="libroStyle.css">
    <title>Document</title>
</head>
<body>
    <div>
        <label>Libros: </label>
        <form method="GET" action="publicados.php">
            autor: <input type="text" name="autor" required><br>
            editorial: <input type="text" name="editorial" required><br>
            pagina: <input type="number" name="pagina" required><br>
            titulo: <input type="text" name="titulo" required><br>
            <button type="submit">enviar</button>
        </form>
        <table border="1">
            <tr>
                <td>valor</td>
                <td>veces</td>
                <td>resultado</td>
            </tr>
            <?php
                
            ?>
    </div>
</body>
</html>
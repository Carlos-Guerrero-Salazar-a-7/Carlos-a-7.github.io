<?php
 $valor=$_GET["DATO"];
 $veces=$_GET["VEZ"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div>
        <label>Escribe las veces que se hara</label>
        <form method="GET">
            Valor<input type="number" name="DATO" value="<?php echo $valor; ?>" required><br>
            Veces<input type="number" name="VEZ" value="<?php echo $veces; ?>" required>
            <button type="submit">enviar</button>
        </form>
    </div>
        <table border="1">
            <tr>
                <td>valor</td>
                <td>veces</td>
                <td>resultado</td>
            </tr>
            <?php
                for ($i=1; $i <= $veces ; $i++) { 
                    echo "<tr>";
                        echo "<td>".$valor."</td>";
                        echo "<td>".$i."</td>";
                        echo "<td>".$i*$valor."</td>";
                    echo "</tr>";
                }
            ?>
        </table>
</body>
</html>
<?php
 if($_SERVER["REQUEST_METHOD"] == "GET") {
    $valor=$_GET["DATO"];
    $veces=$_GET["VEZ"];
 }
?>
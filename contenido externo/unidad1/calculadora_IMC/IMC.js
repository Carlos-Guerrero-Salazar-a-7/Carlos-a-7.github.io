function calcularIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    if(peso > 0 && altura > 0){
        var imc = peso / (altura * altura);
        document.getElementById("textoResultado").innerText = "Resultado: \nTu IMC es: " + imc;
        
        
        var categoria = "";
        
        if(imc < 18.5){
            categoria = "Bajo peso";
            cambiarImagen("infrapeso.jpg");
            cambiarcolorfondo("#d1e7d1"); // Fondo claro para bajo peso
        } else if(imc >= 18.5 && imc < 24.9){
            categoria = "Normal";
            cambiarImagen("normal.png");
            cambiarcolorfondo("#bfffbf"); // Fondo verde suave
        } else if(imc >= 25 && imc < 29.9){
            categoria = "Sobrepeso";
            cambiarImagen("sobrepeso.png");
            cambiarcolorfondo("#f9e2ae"); // Fondo amarillo suave
        } else if(imc >= 30 && imc < 35){
            categoria = "Obesidad leve"; 
            cambiarImagen("obesidad.png");
            cambiarcolorfondo("#ffcccb"); // Fondo rojo suave
        } else if(imc >= 35){
            categoria = "Obesidad media";
            cambiarImagen("obesidadM.png");
            cambiarcolorfondo("#ff9999"); // Fondo rojo medio
        }
        
        document.getElementById("textoResultado").innerText += "\nCategoría: " + categoria;
    }
}

function cambiarImagen(imagennueva){
    var imagen = document.getElementById("imagen");
    if (imagen) {
        let ruta = 'img/' + imagennueva;
        console.log("Cargando imagen:", ruta);
        imagen.setAttribute("src", ruta);
        imagen.style.display = "block";
    } else {
        console.log("No se encontró el elemento <img> con id 'imagen'.");
    }
}


function cambiarcolorfondo(color){
    document.body.style.backgroundColor = color;
}

    function mostrar(elemento){
        elemento.style.display="none";
        comparar(elemento);
    }


    function generarNumeroAleatorio(){
    let cuadros = document.querySelectorAll('#cuadro');
    let fondosnegros = document.querySelectorAll('#ocultar');
    
    let numero = cuadros.length / 2;
    let numerosDisponibles = [];
    for(let i = 1; i <= numero; i++){
        numerosDisponibles.push(i);
        numerosDisponibles.push(i);
    }
    for(let i = numerosDisponibles.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [numerosDisponibles[i], numerosDisponibles[j]] = [numerosDisponibles[j], numerosDisponibles[i]];
    }
    cuadros.forEach((cuadro, index) => {
        let valorAleatorio = numerosDisponibles[index];
        cuadro.setAttribute("style","background-image: url('imagenes/"+valorAleatorio+".png'); background-size: cover;");
    });
    fondosnegros.forEach((fondo, index) => {
        let valorAleatorio = numerosDisponibles[index];
        fondo.setAttribute("value", valorAleatorio);
    });
}
    



    function iniciarJuego(){
        generarNumeroAleatorio();
    }
    window.onload=iniciarJuego;


    function reiniciarJuego(){
        location.reload();
    }

    var contador=0;
    var primerElemento;
    var segundoElemento;
    var primerValor;
    var segundoValor;
    var aciertos=0;
    var errores=0;
    var movimientos=0;
    function comparar(elemento){
    if(contador == 1){
        contador = 0;
        segundoElemento = elemento;
        segundoValor = elemento.getAttribute("value");
        let fondosnegros = document.querySelectorAll('#ocultar');
        fondosnegros.forEach(function(fondo){
            fondo.setAttribute("onclick",null);
        });
        // Comparar después de seleccionar el segundo elemento
        if(primerValor == segundoValor && primerElemento != segundoElemento){
            // ¡Acierto!
            aciertos++;
            primerElemento = null;
            segundoElemento = null;
            fondosnegros.forEach(function(fondo){
            fondo.setAttribute("onclick","mostrar(this)");
            });
        } else {
            // Error - mostrar de nuevo después de un delay
            errores++;
            setTimeout(function(){
                primerElemento.style.display = "block";
                segundoElemento.style.display = "block";
                primerElemento = null;
                segundoElemento = null;
                fondosnegros.forEach(function(fondo){
                fondo.setAttribute("onclick","mostrar(this)");
                });
            }, 1000);  
        };

        
        movimientos++;
        let elementoAciertos = document.getElementById("Acciertos");
        let elementoErrores = document.getElementById("Errores");
        let elementoMovimientos = document.getElementById("Movimientos");
        
        if(elementoAciertos) elementoAciertos.innerHTML = "ACCIERTOS:"+aciertos;
        if(elementoErrores) elementoErrores.innerHTML = "ERRORES:"+errores;
        if(elementoMovimientos) elementoMovimientos.innerHTML ="MOVIMIENTOS:"+movimientos;

        let totalPares = document.querySelectorAll('#cuadro').length / 2;
        if(aciertos == totalPares){
            setTimeout(function(){
                alert("¡Felicidades, has ganado el juego!");
            }, 500);
        }
    } else {
        // Primera selección
        contador++;
        primerElemento = elemento;
        primerValor = elemento.getAttribute("value");
    }
}
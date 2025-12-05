function accion(elemento) {
    const valor = elemento.value;
    const pantalla = document.getElementById("calculo");
    const resultado_resultado = document.getElementById("resultado")
    
    if (valor === "AC") {
        pantalla.innerText = "0";
        return;
    }
    
    if (valor === "=") {
        try {
            const resultado = eval(pantalla.innerText);
            pantalla.innerText = resultado;
            resultado_resultado.innerHTML = resultado
        } catch (e) {
            pantalla.innerText = "Error";
        }
        return;
    }
    
    if (pantalla.innerText === "0" || pantalla.innerText === "Error") {
        pantalla.innerText = valor;
    } else {
        pantalla.innerText += valor;
    }
}

//ejercicio 7
document.getElementById("calculadoraNotas").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Obtiene los valores de las notas introducidas por el usuario y se asegura de convertirlos a numeros
    const primeraNota = parseFloat(document.getElementById("primeraNota").value);
    const segundaNota = parseFloat(document.getElementById("segundaNota").value);

    //30% para la primera nota y 70% para la segunda
    let ponPrimeraNota = 0.3;
    let ponSegundaNota = 0.7;
    let notaMediaPonderada = (primeraNota * ponPrimeraNota) + (segundaNota * ponSegundaNota);

    // Muestra el resultado en el div resultadoNotas
    let resultadoDiv = document.getElementById("resultadoNotas");
    resultadoDiv.textContent = "La nota media ponderada es: " + notaMediaPonderada.toFixed(2);
    resultadoDiv.style.display = "block";
});


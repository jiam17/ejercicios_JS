
//ejercicio 4
document.querySelector('#numeroComparacion').addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los valores de los números ingresados
    const firstNumber = parseFloat(document.getElementById('firtNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);

    // Realizar la comparación
    let resultadoComp = "";
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultadoComp = "Ingresa números válidos.";
    } else if (firstNumber > secondNumber) {
        resultadoComp = `El primer número (${firstNumber}) es mayor.`;
    } else if (secondNumber > firstNumber) {
        resultadoComp = `El segundo número (${secondNumber}) es mayor.`;
    } else {
        resultadoComp = "Ambos números son iguales.";
    }

    // Mostrar el resultado en el div correspondiente
    const resultadoElement = document.getElementById('resultadoComparacion');
    resultadoElement.innerText = resultadoComp;
    resultadoElement.style.display = "block";
}); 

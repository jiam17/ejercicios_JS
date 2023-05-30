
//ejercicio 6
const formulario = document.getElementById("formularioViaje");
const resultadoDescuento = document.getElementById("resultadoDescuento");

// Agregar un evento listener al envío del formulario
formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de origen y destino
  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;

  // Calculawr el descuento utilizando la funcion
  const descuento = calcularDescuento(origen, destino);

  // Mostrar el resultado en el elemento de resultado (se pueden usar comillas dentro de un aparatado)
  resultadoDescuento.innerHTML = `Tu lugar de destino es "${destino}"<br/>El descuento es del ${descuento}%`;
  resultadoDescuento.style.display = "block";
});

function calcularDescuento(origen, destino) {
  let descuento = 0;

  if (origen.toLowerCase() === "palma" && destino.toLowerCase() === "costa del sol") {
    descuento = 5;
  } else if (destino.toLowerCase() === "panchimalco") {
    descuento = 10;
  } else if (destino.toLowerCase() === "puerto el triunfo") {
    descuento = 15;
  }

  //retornar para evitar undefined
  return descuento;
}

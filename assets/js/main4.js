
//ejercicio 5
function calcularDescuento() {
    const precioCocheInput = document.getElementById('precioCoche');
    const modeloCocheSelect = document.getElementById('modelo');
    const resultadoDescuento = document.getElementById('resultadoDescuento');
  
    const precioCoche = parseFloat(precioCocheInput.value);
    const modeloCoche = modeloCocheSelect.value;
  
    //condicional para aplicar descuentos
    let descuento = 0;
    switch (modeloCoche) {
      case 'Ford Fiesta':
        descuento = precioCoche * 0.05; 
        break;
      case 'Ford Focus':
        descuento = precioCoche * 0.1; // Descuento del 10%
        break;
      case 'Ford Escape':
        descuento = precioCoche * 0.2; // Descuento del 20%
        break;
    }
  
    //precio final menos descuento
    const precioFinal = precioCoche - descuento;
  
    resultadoDescuento.innerHTML = `
      <p>Coche seleccionado: ${modeloCoche} (${precioCoche})</p>
      <p>Descuento aplicado: ${descuento.toFixed(2)}</p>
      <p>Precio final: ${precioFinal.toFixed(2)}</p>
    `;
  
    resultadoDescuento.style.display = "block";
  }
  
  const formulario = document.getElementById('formularioCarro');
  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); 
    calcularDescuento(); 
  });
  

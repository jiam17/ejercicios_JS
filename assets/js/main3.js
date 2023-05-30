
//ejercicio 8
function convertirTemperatura() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);

    var mensajeTemperatura = obtenerMensajeTemperatura(fahrenheit);
    document.getElementById("mensajeTemperatura").innerText = mensajeTemperatura;
    document.getElementById("mensajeTemperatura").style.display = "block";
  }

  function obtenerMensajeTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit <= 32) {
      return "Temperatura baja";
    } else if (fahrenheit > 32 && fahrenheit <= 68) {
      return "Temperatura adecuada";
    } else if (fahrenheit > 68 && fahrenheit <= 96) {
      return "Temperatura alta";
    } else {
      return "Temperatura desconocida";
    }
  }


//ejercicio 10
function calcularPromedios() {
    // Obtener los elementos de entrada de cada turno
    var mananaInput = document.getElementById('manana1');
    var tardeInput = document.getElementById('tarde1');
    var nocheInput = document.getElementById('noche1');
  
    // Obtener los valores de edad de cada turnoo
    var mananaEdades = obtenerEdades(mananaInput.value);
    var tardeEdades = obtenerEdades(tardeInput.value);
    var nocheEdades = obtenerEdades(nocheInput.value);
  
    // Calcular los promedios de edad cada turno
    var mananaPromedio = calcularPromedio(mananaEdades);
    var tardePromedio = calcularPromedio(tardeEdades);
    var nochePromedio = calcularPromedio(nocheEdades);
  
    // Imprimir los promedios en el elemento de resultad
    var resultadosPromedios = document.getElementById('resultadosPromedios');
    resultadosPromedios.innerHTML = `
      <h4>Promedio de Edades por Turno:</h4>
      <p>Turno Mañana: ${mananaPromedio.toFixed(2)}</p>
      <p>Turno Tarde: ${tardePromedio.toFixed(2)}</p>
      <p>Turno Noche: ${nochePromedio.toFixed(2)}</p>
    `;
  
    // Mostrar el elemento de resultados
    resultadosPromedios.style.display = 'block';
  
    // Determinar el turno con el promedio de edades mas alto
    var turnoMaxPromedio = '';
    var maxPromedio = Math.max(mananaPromedio, tardePromedio, nochePromedio);
  
    if (maxPromedio === mananaPromedio) {
      turnoMaxPromedio = 'Turno Mañana';
    } else if (maxPromedio === tardePromedio) {
      turnoMaxPromedio = 'Turno Tarde';
    } else if (maxPromedio === nochePromedio) {
      turnoMaxPromedio = 'Turno Noche';
    }
  
    // Mostrar el mensaje del turno con el promedio más alto
    var mensajePromedioAlto = `El turno con el promedio de edades más alto es: ${turnoMaxPromedio}`;
    var mensajePromedioAltoElemento = document.createElement('p');
    mensajePromedioAltoElemento.textContent = mensajePromedioAlto;
    resultadosPromedios.appendChild(mensajePromedioAltoElemento);
  }
  
  function obtenerEdades(valores) {
    var edades = valores.split(',').map(function (edad) {
      return parseInt(edad.trim(), 10);
    });
    return edades;
  }
  
  function calcularPromedio(edades) {
    if (edades.length === 0) {
      return 0;
    }
    var suma = edades.reduce(function (total, edad) {
      return total + edad;
    });
    return suma / edades.length;
  }
  

  //eliminando las edades por defecto

  function verificarEdadesPorDefecto() {
    //definimos un arreglo que contenga los datos de los inputs
    var inputs = [
      {
        id: 'manana1',
        defaultValue: '22,24,21,17,19',
        defectoId: 'edadesDefectoManana'
      },
      {
        id: 'tarde1',
        defaultValue: '21,18,22,16,20,26',
        defectoId: 'edadesDefectoTarde'
      },
      {
        id: 'noche1',
        defaultValue: '19,21,18,30,25,19,23,21,24,19,17',
        defectoId: 'edadesDefectoNoche'
      }
    ];
  
    //funcion para eliminar los textos (edades por defecto)
    inputs.forEach(function (input) {
      var element = document.getElementById(input.id);
      var defectoElement = document.getElementById(input.defectoId);
  
      element.addEventListener('input', function () {
        var valor = element.value.trim();
  
        if (valor !== "" && valor !== input.defaultValue) {
          defectoElement.style.display = 'none';
        } else {
          defectoElement.style.display = (valor !== "") ? 'block' : 'none';
        }
      });
    });
  }
  
  verificarEdadesPorDefecto();
 

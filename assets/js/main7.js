//ejercicio 9
document.getElementById("valores").addEventListener("input", function() {
    var valores = this.value.trim();
    var textoDefecto = document.getElementById("textoDefecto");

    //eliminando los numeros por defecto
    if (valores !== "" && valores !== "10,-5,45,30,10,-9,62,17,45,-96") {
        textoDefecto.style.display = "none";
      } else {
        textoDefecto.style.display = (valores !== "") ? "block" : "none";
      }
      
  });
  
  document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    procesarDatos();
  });
  
  function procesarDatos() {
    var valoresTexto = document.getElementById("valores").value;
    var valores = valoresTexto.split(",").map(function(valor) {
      return parseInt(valor.trim());
    });
  
    var cantidadNegativos = 0;
    var cantidadPositivos = 0;
    var cantidadMultiplos15 = 0;
    var acumuladoPares = 0;
  
    for (var i = 0; i < valores.length; i++) {
      var valor = valores[i];
  
      if (valor < 0) {
        cantidadNegativos++;
      } else if (valor > 0) {
        cantidadPositivos++;
      }
  
      if (valor % 15 === 0) {
        cantidadMultiplos15++;
      }
  
      if (valor % 2 === 0) {
        acumuladoPares += valor;
      }
    }
  
    var resultados = document.getElementById("resultadosTemperatura");
    resultados.innerHTML = `
      <h5>Cantidad de valores negativos:</h5>
      <p>${cantidadNegativos}</p>
      <h5>Cantidad de valores positivos:</h5>
      <p>${cantidadPositivos}</p>
      <h5>Cantidad de múltiplos de 15:</h5>
      <p>${cantidadMultiplos15}</p>
      <h5>Valor acumulado de los números pares:</h5>
      <p>${acumuladoPares}</p>
    `;
  
    resultados.style.display = "block";
  }

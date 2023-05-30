//ejercicio 1
function verificarEdad() {
    var edad = parseInt(document.querySelector('input[type="text"]').value);
    // Verificar si la edad no es un número válido o es igual a cero
    if (isNaN(edad) || edad <= 0 || edad >= 99) {
        document.getElementById('mensaje').innerHTML = "Ingresa una edad válida.";
    } else {
        // Calcular el mensaje correspondiente si la edad es válida
        var mensaje = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
    // Mostrar el mensaje en el elemento HTML
    document.getElementById('mensaje').innerHTML = mensaje;
    //cambiando el estilo del elemento html
    document.getElementById('mensaje').style.display = "block";

    }
  }
  

//ejercicio 2
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var carnet = document.getElementById('carnet').value;
    var examen = parseInt(document.getElementById('examen').value);
    var tareas = parseInt(document.getElementById('tareas').value);
    var asistencia = parseInt(document.getElementById('asistencia').value);
    var investigacion = parseInt(document.getElementById('investigacion').value);

    calcular_nota_final(nombre, carnet, examen, tareas, asistencia, investigacion);
});

function calcular_nota_final(nombre, carnet, examen, tareas, asistencia, investigacion) {
    // Calculando la nota final
    var nota_examen = examen * 0.2;
    var nota_tareas = tareas * 0.4;
    var nota_asistencia = asistencia * 0.1;
    var nota_investigacion = investigacion * 0.3;
    var nota_final = nota_examen + nota_tareas + nota_asistencia + nota_investigacion;

     // Redondeando la nota final a dos decimales
    nota_final = nota_final.toFixed(2);

    // Mostrando los datos del alumno y la nota final
    var resultado = "Datos del alumno:<br>";
    resultado += "Nombre: " + nombre + "<br>";
    resultado += "Carnet: " + carnet + "<br>";
    resultado += "Nota final: " + nota_final;

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('resultado').style.display = "block";

}


//ejercicio 3
function calcularAumento() {
    const nombre = document.getElementById('nombre').value;
    const salario = parseFloat(document.getElementById('salario').value);
    const categoria = document.getElementById('categoria').value;
  
    let aumento = 0;
  
    switch (categoria) {
      case 'A':
        aumento = salario * 0.15;
        break;
      case 'B':
        aumento = salario * 0.3;
        break;
      case 'C':
        aumento = salario * 0.1;
        break;
      case 'D':
        aumento = salario * 0.2;
        break;
    }
  
    const salarioTotal = salario + aumento;
  
    const resultadoAumento = `
      Datos del empleado:<br>
      Nombre: ${nombre}<br>
      Salario: $${salario}<br>
      Categoría: ${categoria}<br>
      Aumento salarial: $${aumento.toFixed(2)}<br>
      Salario total: $${salarioTotal.toFixed(2)}
    `;
  
    document.getElementById('resultadoAumento').innerHTML = resultadoAumento;
    document.getElementById('resultadoAumento').style.display = "block";
  }
  
  document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularAumento();
  });

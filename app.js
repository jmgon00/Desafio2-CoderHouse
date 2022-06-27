/*se piden los datos del alumno */
let nombreAlumno = prompt("Ingrese su nombre");
alert("Nombre ingresado: " + nombreAlumno);
let paisAlumno = prompt("Ingrese su pais");
alert("Pais ingresado: " + paisAlumno);

/*se piden las notas*/
let nota1 = parseFloat(prompt("Ingrese primer nota"));
alert("Primer nota ingresada: " + nota1);
let nota2 = parseFloat(prompt("Ingrese segunda nota"));
alert("Segunda nota ingresada: " + nota2);
let nota3 =  parseFloat(prompt("Ingrese tercera nota"));
alert("Tercera nota ingresada: " + nota3);

/*se crea el objeto persona*/
const persona = {
    nombre: nombreAlumno,
    pais: paisAlumno,
};

/**funcion suma******************************* */

const suma = (nota1, nota2, nota3) => {return  nota1 + nota2 + nota3; } 



let resultadoSuma = suma(nota1, nota2, nota3);

/**funcion promedio******************************* */

const promedio = (resultadoSuma) => {return resultadoSuma / 3;}

let promedioFinal = promedio(resultadoSuma);
alert(`El promedio del alumno: ${persona.nombre } es igual a: ${promedioFinal}`);

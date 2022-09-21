console.log("\n --EXERCISE 6: Funciones");

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log("-Exercise 6.a:");
function numbers(a, b) {
  return a + b;
}
numbers();
var result = numbers(2, 2);
console.log(result);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log("-Exercise 6.b:");
function numbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return window.alert("Error: both of the values must be numbers");
  } else {
    return a + b;
  }
}
numbers(3,'e')

// c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log("-Exercise 6.c:");
function validateInteger(a){
  if(Number.isInteger(a)){
    return true
  }
}
validateInteger(3)

// d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).

function numbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return window.alert("Error: both of the values must be numbers");
  }
  if (!validateInteger(a)){
    window.alert('error')
    return Math.round(a)
  }
  if (!validateInteger(b)){
    window.alert('error')
    return Math.round(b)
  }
  else {
    return a + b;
  }
}
console.log(numbers(1.3,4));
console.log(numbers(2,5));

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.






